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

    return NextResponse.json({ status: 200 });
  } catch (error) {}
}
