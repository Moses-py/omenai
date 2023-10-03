import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { parseRegisterData } from "@/lib/auth/parseRegisterData";
import { NextResponse as res } from "next/server";
import generateString from "@/utils/generateString";
import { VerificationCodes } from "@/models/auth/verification/codeTimeoutSchema";
import { AccountGallery } from "@/models/auth/GallerySchema";
import { sendGalleryMail } from "@/emails/models/gallery/sendGalleryMail";
import { ServerError } from "@/custom/errors/dictionary/errorDictionary";

export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const data = await request.json();

    const parsedData = await parseRegisterData(data);

    const email_token = await generateString();

    const saveData = await AccountGallery.create({
      ...parsedData,
    });

    if (!saveData)
      throw new ServerError("A server error has occured, please try again");

    const storeVerificationCode = await VerificationCodes.create({
      code: email_token,
      author: saveData.gallery_id,
    });

    if (!storeVerificationCode)
      throw new ServerError("A server error has occured, please try again");

    const { user_id, email, name } = saveData;

    await sendGalleryMail({
      name: name,
      email: email,
      token: email_token,
    });

    return res.json({
      status: 201,
      message: "Account successfully registered",
      data: user_id,
    });
  } catch (error) {
    console.log(error);
    return res.json(error, { status: 500 });
  }
}
