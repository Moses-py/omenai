import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const verify_transaction = await fetch(
      `https://api.flutterwave.com/v3/transactions/${data.transaction_id}/verify`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.FLW_TEST_SECRET_KEY}`,
        },
      }
    );

    const convert_verify_transaction_json_response =
      await verify_transaction.json();

    if (convert_verify_transaction_json_response.status !== "success") {
      return NextResponse.json(
        {
          message: convert_verify_transaction_json_response.message,
        },
        { status: 404 }
      );
    }

    if (convert_verify_transaction_json_response.data.status !== "successful") {
      return NextResponse.json(
        {
          message: "Transaction failed",
          data: convert_verify_transaction_json_response.data,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          message: "Transaction successful",
          data: convert_verify_transaction_json_response.data,
        },
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
