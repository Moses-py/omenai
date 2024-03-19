import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { AccountGallery } from "@/models/auth/GallerySchema";
import { Subscriptions } from "@/models/subscriptions/SubscriptionSchema";
import { TestDb } from "@/models/test/TestSchema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongoDB();
    const currentDate = new Date();

    await TestDb.updateMany(
      {
        date: { $lte: currentDate },
      },
      { $set: { changed: true } }
    );

    console.log("his cron ran successfully");

    return NextResponse.json(
      { message: "This cron ran successfully" },
      { status: 200 }
    );
  } catch (error) {}
}
