import { ServerError } from "@/custom/errors/dictionary/errorDictionary";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { AccountGallery } from "@/models/auth/GallerySchema";
import { Subscriptions } from "@/models/subscriptions/SubscriptionSchema";
import { TestDb } from "@/models/test/TestSchema";
import { NextResponse } from "next/server";

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

    console.log(cronTest);

    return NextResponse.json(
      { message: "This cron ran successfully" },
      { status: 200 }
    );
  } catch (error) {}
}
