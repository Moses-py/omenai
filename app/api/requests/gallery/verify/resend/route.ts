import { ServerError } from "@/custom/errors/dictionary/errorDictionary";
import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { sendGalleryMail } from "@/emails/models/gallery/sendGalleryMail";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { AccountGallery } from "@/models/auth/GallerySchema";
import { VerificationCodes } from "@/models/auth/verification/codeTimeoutSchema";
import generateString from "@/utils/generateToken";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const { author } = await request.json();

    const { admin, email } = await AccountGallery.findOne(
      { gallery_id: author },
      "admin email"
    );

    const email_token = await generateString();

    const isVerificationTokenActive = await VerificationCodes.findOne({
      author,
    });

    if (isVerificationTokenActive)
      await VerificationCodes.deleteOne({
        author,
        code: isVerificationTokenActive.code,
      });

    const storeVerificationCode = await VerificationCodes.create({
      code: email_token,
      author,
    });

    if (!storeVerificationCode)
      throw new ServerError("A server error has occured, please try again");

    await sendGalleryMail({
      name: admin,
      email,
      token: email_token,
    });

    return NextResponse.json(
      {
        message: "User successfully registered",
      },
      { status: 201 }
    );
  } catch (error) {
    const error_response = handleErrorEdgeCases(error);

    return NextResponse.json(
      { message: error_response?.message },
      { status: error_response?.status }
    );
  }
}
