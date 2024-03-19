import { ServerError } from "@/custom/errors/dictionary/errorDictionary";
import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { TestDb } from "@/models/test/TestSchema";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    await connectMongoDB();
    const date = new Date();
    const test = await TestDb.create({ date });
    if (!test) throw new ServerError("Something went wrong");
    return NextResponse.json({ message: "Created" }, { status: 200 });
  } catch (error) {
    const error_response = handleErrorEdgeCases(error);

    return NextResponse.json(
      { message: error_response?.message },
      { status: error_response?.status }
    );
  }
}
