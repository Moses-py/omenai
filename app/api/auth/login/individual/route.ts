import {
  ConflictError,
  RateLimitExceededError,
} from "@/custom/errors/dictionary/errorDictionary";
import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { limiter } from "@/lib/auth/limiter";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import {
  AccountIndividual,
  type IndividualSchemaTypes,
} from "@/models/auth/IndividualSchema";
import bcrypt from "bcrypt";
import { NextResponse, NextResponse as res } from "next/server";

export async function POST(request: Request) {
  try {
    const remainingRequests = await limiter.removeTokens(1);

    if (remainingRequests < 0)
      throw new RateLimitExceededError("Too many Requests");

    await connectMongoDB();

    const data = await request.json();

    const { email, password } = data;

    const user = await AccountIndividual.findOne<IndividualSchemaTypes>(
      { email },
      "user_id password"
    );

    if (!user) throw new ConflictError("Invalid credentials");

    const isPasswordMatch = bcrypt.compareSync(password, user.password);

    if (!isPasswordMatch) throw new ConflictError("Invalid credentials");

    const { user_id } = user;

    return res.json({
      status: 201,
      message: "Login successfull",
      id: user_id,
    });
  } catch (error: any) {
    const error_response = handleErrorEdgeCases(error);
    return NextResponse.json(
      { message: error_response?.message },
      { status: error_response?.status }
    );
  }
}
