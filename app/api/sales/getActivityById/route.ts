import { ServerError } from "@/custom/errors/dictionary/errorDictionary";
import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { SalesActivity } from "@/models/sales/SalesActivity";
import { NextResponse } from "next/server";
export const runtime = "edge";
export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const { id, year } = await request.json();

    const activities = await SalesActivity.find({
      gallery_id: id,
      year,
    });

    if (!activities) throw new ServerError("No orders were found");

    // const updatedActivities = activities.reduce(
    //   (acc, current) => acc + current.age,
    //   0
    // );

    return NextResponse.json(
      {
        message: "Successful",
        data: activities,
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
