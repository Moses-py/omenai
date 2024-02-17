import { ForbiddenError } from "@/custom/errors/dictionary/errorDictionary";
import { ServerError } from "@/custom/errors/dictionary/errorDictionary";
import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";

import { LockMechanism } from "@/models/lock/LockSchema";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const { user_id, art_id } = await request.json();
    const checkIfLockActive = await LockMechanism.findOne({ art_id });

    if (checkIfLockActive)
      throw new ForbiddenError(
        "A user is currently processing a transaction on this artwork. Please refersh your page after a few minutes to check on the status"
      );
    const createLock = await LockMechanism.create({ art_id, user_id });

    if (!createLock)
      throw new ServerError("An error was encountered. Please try again");

    return NextResponse.json(
      {
        message: "Lock acquired",
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
