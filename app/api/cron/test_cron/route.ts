import { ServerError } from "@/custom/errors/dictionary/errorDictionary";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { TestDb } from "@/models/test/TestSchema";
import { NextResponse } from "next/server";
export const revalidate = 0;
export const dynamic = "force-dynamic";
export async function GET() {
  try {
    await connectMongoDB();
    const currentDate = new Date();

    const cronTest = await TestDb.updateMany(
      {
        date: { $lte: currentDate },
      },
      { $set: { changed: true } }
    );

    if (!cronTest)
      throw new ServerError("Cron did not run due to a db update error");

    return NextResponse.json(
      { message: "This cron ran successfully" },
      { status: 200 }
    );
  } catch (error) {}
}
