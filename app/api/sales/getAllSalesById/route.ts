import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { SalesActivity } from "@/models/sales/SalesActivity";
import { NextResponse } from "next/server";
export const runtime = "edge";
export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const { id } = await request.json();
    const allSales = await SalesActivity.find({ gallery_id: id }, "_id").exec();

    return NextResponse.json(
      {
        message: "Successful",
        data: allSales,
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
