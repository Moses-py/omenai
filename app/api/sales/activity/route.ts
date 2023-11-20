import { ServerError } from "@/custom/errors/dictionary/errorDictionary";
import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { SalesActivity } from "@/models/sales/SalesActivity";

import { NextResponse } from "next/server";
export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const data = await request.json();

    const addSalesData = await SalesActivity.create({ ...data });

    if (!addSalesData) throw new ServerError("An error was encountered.");

    return NextResponse.json(
      {
        message: "Sales data addede",
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
