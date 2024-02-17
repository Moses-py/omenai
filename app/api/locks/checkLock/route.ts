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
    if (!checkIfLockActive) {
      return NextResponse.json(
        {
          message: "No lock is present",
          data: {
            locked: false,
          },
        },
        { status: 200 }
      );
    }

    if (checkIfLockActive.user_id !== user_id) {
      return NextResponse.json(
        {
          message: "Lock acquired by another user",
          data: {
            locked: true,
          },
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          message: "Lock acquired by current user",
          data: {
            locked: false,
          },
        },
        { status: 200 }
      );
    }
  } catch (error) {
    const error_response = handleErrorEdgeCases(error);

    return NextResponse.json(
      { message: error_response?.message },
      { status: error_response?.status }
    );
  }
}
