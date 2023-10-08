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

export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const { password, id } = await request.json();

    const filter = { user_id: id };

    const user = await AccountIndividual.findOne(filter, "password").exec();

    const isPasswordMatch = bcrypt.compareSync(password, user.password);

    if (isPasswordMatch)
      throw new ConflictError(
        "Your new password cannot be identical to your old password"
      );

    const hash = hashPassword(password);

    if (!hash)
      throw new ServerError("A server error has occured, please try again");

    const update = { password: hash };

    const updateAccountInfo = await AccountIndividual.updateOne(filter, update);

    if (!updateAccountInfo)
      throw new ServerError("A server error has occured, please try again");

    return NextResponse.json({ message: "Password updated!" }, { status: 200 });
  } catch (error) {
    const error_response = handleErrorEdgeCases(error);

    return NextResponse.json(
      { message: error_response?.message },
      { status: error_response?.status }
    );
  }
}
