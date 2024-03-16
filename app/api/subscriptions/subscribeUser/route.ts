import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { createSubscription } from "@/services/subscriptions/createSubscription";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, name } = await request.json();
    // Get list of subscriptions to check if user is subscribed already

    const get_active_subscriptions = await fetch(
      "https://api.flutterwave.com/v3/subscriptions",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.FLW_TEST_SECRET_KEY}`,
        },
      }
    );

    // https://api.flutterwave.com/v3/payment-plans

    const res = await get_active_subscriptions.json();

    // Get subscrption status of user and provide actions for all statuses

    const data_filter = res.data.find((datum: any) => {
      return datum.customer.customer_email === email;
    });

    if (data_filter) {
      if (data_filter.status === "active") {
        return NextResponse.json(
          {
            message: "Subscription already active",
            data: data_filter,
          },
          { status: 409 }
        );
      } else {
        // Activate subscription
        if (data_filter.plan !== process.env.FLW_PAYMENT_PLAN_ID!) {
          const get_subscription_payment_link = await createSubscription(
            email,
            name
          );

          const response = await get_subscription_payment_link.json();

          if (response) {
            return NextResponse.json(
              {
                message: "Payment link fetch successfully",
                data: response.data,
              },
              { status: 200 }
            );
          }
        } else {
          // Activate subscription
        }
      }
    } else {
      const get_subscription_payment_link = await createSubscription(
        email,
        name
      );
      const response = await get_subscription_payment_link.json();

      if (response) {
        return NextResponse.json(
          {
            message: "Payment link fetch successfully",
            data: response.data,
          },
          { status: 200 }
        );
      }
    }
  } catch (error) {
    const error_response = handleErrorEdgeCases(error);

    return NextResponse.json(
      { message: error_response?.message },
      { status: error_response?.status }
    );
  }
}
