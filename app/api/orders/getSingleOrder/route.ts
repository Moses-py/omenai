import { CreateOrder } from "@/models/orders/CreateOrderSchema";
import { ServerError } from "@/custom/errors/dictionary/errorDictionary";
import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const { order_id } = await request.json();

    const order = await CreateOrder.findOne({ order_id });

    // if (!order) throw new ServerError("No order matching this id found");

    return NextResponse.json(
      {
        message: "Successful",
        data: order,
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
