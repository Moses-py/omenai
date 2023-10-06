import {
  BadRequestError,
  NotFoundError,
} from "@/custom/errors/dictionary/errorDictionary";
import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { AccountIndividual } from "@/models/auth/IndividualSchema";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    await connectMongoDB();
    let id;
    try {
      const { accountId } = await request.json();
      id = accountId;
    } catch (error) {
      throw new BadRequestError("Invalid JSON in request body");
    }

    const isVerified = await AccountIndividual.findOne(
      { user_id: id },
      "verified"
    ).exec();

    if (!isVerified) throw new NotFoundError("Account not found");

    return NextResponse.json({ data: isVerified.verified }, { status: 200 });
  } catch (error) {
    const error_response = handleErrorEdgeCases(error);

    return NextResponse.json(
      { message: error_response?.message },
      { status: error_response?.status }
    );
  }
}
