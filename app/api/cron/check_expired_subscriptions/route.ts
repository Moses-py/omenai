import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { AccountGallery } from "@/models/auth/GallerySchema";
import { Subscriptions } from "@/models/subscriptions/SubscriptionSchema";
import { NextResponse } from "next/server";
export const revalidate = 0;
export const dynamic = "force-dynamic";
export async function GET() {
  await connectMongoDB();
  const currentDate = new Date();
  const expired_user_emails = await Subscriptions.find(
    {
      sub_expiry_date: { $lte: currentDate },
    },
    "customer.email"
  );
  // Iterate through the expired documents
  expired_user_emails.forEach(async (doc) => {
    // Handle the expired document (e.g., update a field)
    // Update the necessary field for the expired document
    await AccountGallery.updateOne(
      { email: doc.customer.email },
      { $set: { subscription_active: false } }
    );
  });
  await Subscriptions.updateMany(
    {
      sub_expiry_date: { $lte: currentDate },
    },
    { $set: { sub_status: "expired" } }
  );

  return NextResponse.json(
    { message: "This cron job ran at it's designated time" },
    { status: 200 }
  );
}
