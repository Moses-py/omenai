import {
  BadRequestError,
  ForbiddenError,
  RateLimitExceededError,
} from "@/custom/errors/dictionary/errorDictionary";
import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { getIp } from "@/lib/auth/getIp";
import { limiter } from "@/lib/auth/limiter";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { AccountGallery } from "@/models/auth/GallerySchema";
import { VerificationCodes } from "@/models/auth/verification/codeTimeoutSchema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const ip = await getIp();

    const { success } = await limiter.limit(ip);
    if (!success)
      throw new RateLimitExceededError("Too many requests, try again later.");
    await connectMongoDB();

    const { gallery_id, token } = await request.json();

    const user = await AccountGallery.findOne(
      { gallery_id },
      "verified"
    ).exec();

    if (user.verified) throw new ForbiddenError("This action is not permitted, account already verified");

    const isTokenActive = await VerificationCodes.findOne({
      author: gallery_id,
      code: token,
    }).exec();

    if (!isTokenActive) throw new BadRequestError("Invalid token data");

    await AccountGallery.updateOne({ gallery_id }, { verified: true });

    await VerificationCodes.deleteOne({ code: token, author: gallery_id });

    return NextResponse.json(
      { message: "Verification was successful. Please login" },
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
