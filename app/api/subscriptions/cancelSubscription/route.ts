import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { Subscriptions } from "@/models/subscriptions/SubscriptionSchema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await connectMongoDB();
    const { email } = await request.json();

    const get_all_subscriptions = await fetch(
      `https://api.flutterwave.com/v3/subscriptions`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.FLW_TEST_SECRET_KEY}`,
        },
      }
    );

    const sub_data = await get_all_subscriptions.json();
    // console.log(sub_data.data);

    const user = sub_data.data.find((data: any) => {
      return data.customer.customer_email === email;
    });

    const deactivate_subscription = await fetch(
      `https://api.flutterwave.com/v3/subscriptions/${user.id}/cancel`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.FLW_TEST_SECRET_KEY}`,
        },
      }
    );

    const deactivate_subscription_response =
      await deactivate_subscription.json();

    if (deactivate_subscription_response.status === "success") {
      await Subscriptions.updateOne(
        { "customer.email": email },
        { $set: { sub_status: "canceled" } }
      );
      return NextResponse.json(
        { message: deactivate_subscription_response.message },
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
