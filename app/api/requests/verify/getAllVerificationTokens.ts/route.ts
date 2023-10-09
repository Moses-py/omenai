import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { VerificationCodes } from "@/models/auth/verification/codeTimeoutSchema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongoDB();

    const tokens = await VerificationCodes.find({}, "code");

    return NextResponse.json({ data: tokens }, { status: 200 });
  } catch (error) {
    const error_response = handleErrorEdgeCases(error);

    return NextResponse.json(
      { message: error_response?.message },
      { status: error_response?.status }
    );
  }
}
