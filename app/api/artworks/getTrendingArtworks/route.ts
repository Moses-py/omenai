import { ServerError } from "@/custom/errors/dictionary/errorDictionary";
import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { Artworkuploads } from "@/models/artworks/UploadArtworkSchema";
import { NextResponse } from "next/server";
export const revalidate = 0;
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectMongoDB();

    const allTrendingArtworks = await Artworkuploads.find().sort({
      impressions: -1,
    });

    if (!allTrendingArtworks) throw new ServerError("An error was encountered");

    return NextResponse.json(
      {
        message: "Successful",
        data: allTrendingArtworks,
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
