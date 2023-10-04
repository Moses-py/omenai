import {
  ForbiddenError,
  NotFoundError,
  ServerError,
} from "@/custom/errors/dictionary/errorDictionary";
import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { sendPasswordRecoveryMail } from "@/emails/models/recovery/sendPasswordRecoveryMail";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { AccountGallery } from "@/models/auth/GallerySchema";
import { VerificationCodes } from "@/models/auth/verification/codeTimeoutSchema";
import { generateDigit } from "@/utils/generateToken";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const { recoveryEmail } = await request.json();

    const data = await AccountGallery.findOne(
      { email: recoveryEmail },
      "email gallery_id admin name"
    ).exec();

    if (!data) throw new NotFoundError("Email does not exist");

    const { email, gallery_id, admin, name } = data;

    const email_token = await generateDigit(6);

    const isVerificationTokenActive = await VerificationCodes.findOne({
      author: gallery_id,
    });

    if (isVerificationTokenActive)
      throw new ForbiddenError("Token is active. Please provide token");

    const storeVerificationCode = await VerificationCodes.create({
      code: email_token,
      author: gallery_id,
    });

    if (!storeVerificationCode)
      throw new ServerError("A server error has occured, please try again");

    await sendPasswordRecoveryMail({
      name: admin,
      email: email,
      token: email_token,
      gallery_name: name,
    });

    return NextResponse.json(
      { message: "Verification code sent" },
      { status: 200 }
    );
  } catch (error) {
    const error_response = handleErrorEdgeCases(error);

    return NextResponse.json(
      { message: error_response?.message },
      { status: error_response?.status }
    );
  }
}
