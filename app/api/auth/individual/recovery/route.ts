import {
  ForbiddenError,
  NotFoundError,
  RateLimitExceededError,
  ServerError,
} from "@/custom/errors/dictionary/errorDictionary";
import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { sendPasswordRecoveryMail } from "@/emails/models/recovery/sendPasswordRecoveryMail";
import { limiter } from "@/lib/auth/limiter";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { AccountIndividual } from "@/models/auth/IndividualSchema";
import { VerificationCodes } from "@/models/auth/verification/codeTimeoutSchema";
import { generateDigit } from "@/utils/generateToken";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const remainingRequests = await limiter.removeTokens(1);

    if (remainingRequests < 0)
      throw new RateLimitExceededError(
        "Request limit exceeded - try again after 10 minutes"
      );
    await connectMongoDB();

    const { recoveryEmail } = await request.json();

    const data = await AccountIndividual.findOne(
      { email: recoveryEmail },
      "email user_id name"
    ).exec();

    if (!data) throw new NotFoundError("Email does not exist");

    const { email, user_id, name } = data;

    const email_token = await generateDigit(6);

    const isVerificationTokenActive = await VerificationCodes.findOne({
      author: user_id,
    });

    if (isVerificationTokenActive)
      throw new ForbiddenError("Token is active. Please provide token");

    const storeVerificationCode = await VerificationCodes.create({
      code: email_token,
      author: user_id,
    });

    if (!storeVerificationCode)
      throw new ServerError("A server error has occured, please try again");

    await sendPasswordRecoveryMail({
      name: name,
      email: email,
      token: email_token,
    });

    return NextResponse.json(
      { message: "Verification code sent", id: user_id },
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
