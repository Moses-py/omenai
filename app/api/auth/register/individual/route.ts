import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { AccountIndividual } from "@/models/auth/IndividualSchema";
import { parseRegisterData } from "@/lib/auth/parseRegisterData";
import { NextResponse, NextResponse as res } from "next/server";
import generateString from "@/utils/generateToken";
import { sendIndividualMail } from "@/emails/models/individuals/sendIndividualMail";
import { VerificationCodes } from "@/models/auth/verification/codeTimeoutSchema";
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

    const saveData = await AccountIndividual.create({
      ...parsedData,
    });

    const { user_id } = saveData;

    if (!saveData)
      throw new ServerError("A server error has occured, please try again");

    const isVerificationTokenActive = await VerificationCodes.findOne({
      author: user_id,
    });

    if (isVerificationTokenActive)
      throw new ForbiddenError("Token is active. Please provide token");

    const storeVerificationCode = await VerificationCodes.create({
      code: email_token,
      author: saveData.user_id,
    });

    if (!storeVerificationCode)
      throw new ServerError("A server error has occured, please try again");

    await sendIndividualMail({
      name: saveData.name,
      email: saveData.email,
      token: email_token,
    });

    return res.json({
      status: 201,
      message: "User successfully registered",
      data: user_id,
    });
  } catch (error) {
    const error_response = handleErrorEdgeCases(error);

    return NextResponse.json(
      { message: error_response?.message },
      { status: error_response?.status }
    );
  }
}
