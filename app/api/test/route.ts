import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // https://api.flutterwave.com/v3/subscriptions

    // https://api.flutterwave.com/v3/payment-plans
    const get_payment_plans = await fetch(
      "https://api.flutterwave.com/v3/payments",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.FLW_TEST_SECRET_KEY}`,
        },

        body: JSON.stringify({
          tx_ref: "flsjfslfs",
          payment_plan: "63499",
          currency: "NGN",
          amount: "3000",
          redirect_url:
            "https://webhook.site/9d0b00ba-9a69-44fa-a43d-a82c33c36fdc",
          customer: {
            email: "iwroski79@gmail.com",
            phonenumber: "080****4528",
            name: "Ian Wesley",
          },
          customizations: {
            title: "Omena1 gallery subscription plan",
          },
        }),
      }
    );
    const res = get_payment_plans.json();

    return NextResponse.json(
      {
        message: "successful",
        data: res,
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
