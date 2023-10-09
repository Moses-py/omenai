import bcrypt from "bcrypt";
import {
  BadRequestError,
  ConflictError,
  ServerError,
} from "@/custom/errors/dictionary/errorDictionary";
import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { hashPassword } from "@/lib/hash/hashPassword";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { AccountIndividual } from "@/models/auth/IndividualSchema";
import { NextResponse } from "next/server";
import { VerificationCodes } from "@/models/auth/verification/codeTimeoutSchema";

export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const { password, id } = await request.json();

    const user = await VerificationCodes.findOne({ code: id }, "author").exec();

    if (!user)
      throw new BadRequestError("Token invalid. This link is not usable");

    const filter = { user_id: user.author };

    const account = await AccountIndividual.findOne(
      { user_id: user.author },
      "password"
    );

    const isPasswordMatch = bcrypt.compareSync(password, account.password);

    if (isPasswordMatch)
      throw new ConflictError(
        "Your new password cannot be identical to a previously used password"
      );

    const hash = await hashPassword(password);

    if (!hash)
      throw new ServerError("A server error has occured, please try again");

    const update = { password: hash };

    const updateAccountInfo = await AccountIndividual.updateOne(filter, update);

    if (!updateAccountInfo)
      throw new ServerError("A server error has occured, please try again");

    await VerificationCodes.findOneAndDelete({ code: id });
    return NextResponse.json(
      { message: "Password updated! Please login with new credentials." },
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
