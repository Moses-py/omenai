import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { sendPriceEmail } from "@/emails/models/orders/requestPriceEmail";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const { data, email, name } = await request.json();

    await sendPriceEmail({
      name,
      email,
      artwork_data: data,
    });

    return NextResponse.json(
      {
        message: "Successful",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    const error_response = handleErrorEdgeCases(error);

    return NextResponse.json(
      { message: error_response?.message },
      { status: error_response?.status }
    );
  }
}
