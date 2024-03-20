import { NotFoundError } from "@/custom/errors/dictionary/errorDictionary";
import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { Subscriptions } from "@/models/subscriptions/SubscriptionSchema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await connectMongoDB();
    const { email } = await request.json();

    const subscription_data = await Subscriptions.findOne(
      {
        "customer.email": email,
      },
      "sub_start_date sub_expiry_date sub_card_info customer sub_status"
    );

    if (!subscription_data)
      throw new NotFoundError("Subscription data not found");

    return NextResponse.json(
      {
        message: "Successfully retrieved subscription data",
        data: subscription_data,
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
