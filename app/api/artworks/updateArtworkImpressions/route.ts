import { ServerError } from "@/custom/errors/dictionary/errorDictionary";
import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { ArtworkImpressions } from "@/models/artworks/ArtworkImpressionSchema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const { id } = await request.json();

    const updateImpression = await ArtworkImpressions.updateOne(
      { art_id: id },
      { $inc: { impressions: 1 } }
    );

    if (!updateImpression)
      throw new ServerError("An unexpected error has occured.");

    return NextResponse.json(
      {
        message: "Impression count updated",
        data: updateImpression,
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
