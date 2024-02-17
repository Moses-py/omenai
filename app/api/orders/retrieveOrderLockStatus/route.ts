import { CreateOrder } from "@/models/orders/CreateOrderSchema";
import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";

import { NextResponse } from "next/server";
import { NotFoundError } from "@/custom/errors/dictionary/errorDictionary";

export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const { order_id } = await request.json();

    const lock_status = await CreateOrder.findOne(
      { order_id },
      "lock_purchase artwork_data"
    );

    if (!lock_status)
      throw new NotFoundError("No order matching this id found");

    return NextResponse.json(
      {
        message: "Successful",
        data: lock_status,
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
