import {
  BadRequestError,
  ForbiddenError,
  RateLimitExceededError,
} from "@/custom/errors/dictionary/errorDictionary";
import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { AccountGallery } from "@/models/auth/GallerySchema";
import { VerificationCodes } from "@/models/auth/verification/codeTimeoutSchema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const { params, token } = await request.json();

    const user = await AccountGallery.findOne(
      { gallery_id: params },
      "verified"
    ).exec();

    if (user.verified) throw new ForbiddenError("This action is not permitted");

    const isTokenActive = await VerificationCodes.findOne({
      author: params,
      code: token,
    }).exec();

    if (!isTokenActive) throw new BadRequestError("Invalid token data");

    await AccountGallery.updateOne({ gallery_id: params }, { verified: true });

    await VerificationCodes.deleteOne({ code: token, author: params });

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
