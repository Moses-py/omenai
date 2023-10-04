import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { parseRegisterData } from "@/lib/auth/parseRegisterData";
import { NextResponse, NextResponse as res } from "next/server";
import generateString from "@/utils/generateToken";
import { VerificationCodes } from "@/models/auth/verification/codeTimeoutSchema";
import { AccountGallery } from "@/models/auth/GallerySchema";
import { sendGalleryMail } from "@/emails/models/gallery/sendGalleryMail";
import {
  ForbiddenError,
  ServerError,
} from "@/custom/errors/dictionary/errorDictionary";
import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";

export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const data = await request.json();

    const parsedData = await parseRegisterData(data);

    const email_token = await generateString();

    const saveData = await AccountGallery.create({
      ...parsedData,
    });

    const { gallery_id, email, name } = saveData;

    if (!saveData)
      throw new ServerError("A server error has occured, please try again");

    const isVerificationTokenActive = await VerificationCodes.findOne({
      author: gallery_id,
    });

    if (isVerificationTokenActive)
      throw new ForbiddenError("Token is active. Please provide token");

    const storeVerificationCode = await VerificationCodes.create({
      code: email_token,
      author: saveData.gallery_id,
    });

    if (!storeVerificationCode)
      throw new ServerError("A server error has occured, please try again");

    await sendGalleryMail({
      name: name,
      email: email,
      token: email_token,
    });

    return res.json({
      status: 201,
      message: "Account successfully registered",
      data: gallery_id,
    });
  } catch (error) {
    const error_response = handleErrorEdgeCases(error);

    return (
      error_response?.status !== undefined &&
      NextResponse.json(
        { message: error_response.message },
        { status: error_response.status }
      )
    );
  }
}
