import {
  ForbiddenError,
  NotFoundError,
  RateLimitExceededError,
  ServerError,
} from "@/custom/errors/dictionary/errorDictionary";
import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { sendGalleryMail } from "@/emails/models/gallery/sendGalleryMail";
import { getIp } from "@/lib/auth/getIp";
import { limiter } from "@/lib/auth/limiter";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { AccountGallery } from "@/models/auth/GallerySchema";
import { VerificationCodes } from "@/models/auth/verification/codeTimeoutSchema";
import generateString from "@/utils/generateToken";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const ip = await getIp();

    const { success } = await limiter.limit(ip);
    if (!success)
      throw new RateLimitExceededError("Too many requests, try again later.");

    await connectMongoDB();

    const { gallery_id } = await request.json();

    const { admin, email, verified } = await AccountGallery.findOne(
      { gallery_id },
      "admin email verified"
    ).exec();

    if (!admin || !email)
      throw new NotFoundError("Unable to authenticate account");

    if (verified)
      throw new ForbiddenError(
        "This action is not permitted. Account already verified"
      );

    const email_token = await generateString();

    const isVerificationTokenActive = await VerificationCodes.findOne({
      author: gallery_id,
    });

    if (isVerificationTokenActive)
      await VerificationCodes.deleteOne({
        author: gallery_id,
        code: isVerificationTokenActive.code,
      });

    const storeVerificationCode = await VerificationCodes.create({
      code: email_token,
      author: gallery_id,
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
        message: "Verification code resent",
      },
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
