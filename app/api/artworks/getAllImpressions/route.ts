import { ServerError } from "@/custom/errors/dictionary/errorDictionary";
import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { ArtworkImpressions } from "@/models/artworks/ArtworkImpressionSchema";
import { NextResponse } from "next/server";
export const runtime = "edge";
export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const { id } = await request.json();
    const allImpressions = await ArtworkImpressions.find(
      { gallery_id: id },
      "impressions"
    ).exec();

    if (!allImpressions) throw new ServerError("An error was encountered");

    return NextResponse.json(
      {
        message: "Successful",
        data: allImpressions,
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
