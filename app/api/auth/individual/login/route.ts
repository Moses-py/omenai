import {
  ConflictError,
  RateLimitExceededError,
} from "@/custom/errors/dictionary/errorDictionary";
import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { limiter } from "@/lib/auth/limiter";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { AccountIndividual } from "@/models/auth/IndividualSchema";
import bcrypt from "bcrypt";
import { NextResponse, NextResponse as res } from "next/server";

type UserReturn = {
  user_id: string;
  verified: boolean;
  password: string;
};

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { email, password, ip } = data;

    const { success } = await limiter.limit(ip);

    if (!success)
      throw new RateLimitExceededError("Too many requests, try again later.");

    await connectMongoDB();

    const user = await AccountIndividual.findOne<UserReturn>(
      { email },
      "user_id verified password"
    ).exec();

    if (!user) throw new ConflictError("Invalid credentials");

    const isPasswordMatch = bcrypt.compareSync(password, user.password);

    if (!isPasswordMatch) throw new ConflictError("Invalid credentials");

    const { user_id, verified } = user;

    return res.json(
      {
        message: "Login successfull",
        id: user_id,
        verified,
        type: "individual",
      },
      { status: 201 }
    );
  } catch (error: any) {
    const error_response = handleErrorEdgeCases(error);

    return NextResponse.json(
      { message: error_response?.message },
      { status: error_response?.status }
    );
  }
}
