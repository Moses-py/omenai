import { ServerError } from "@/custom/errors/dictionary/errorDictionary";
import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { ArtworkImpressions } from "@/models/artworks/ArtworkImpressionSchema";
import { Artworkuploads } from "@/models/artworks/UploadArtworkSchema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const data = await request.json();

    const uploadArt = await Artworkuploads.create({ ...data });

    if (!uploadArt)
      throw new ServerError("A server error has occured, please try again");

    const impressionData = {
      artist: uploadArt.artist,
      title: uploadArt.title,
      art_id: uploadArt.art_id,
      gallery_id: uploadArt.gallery_id,
      url: uploadArt.url,
    };

    const uploadArtworkImpression = await ArtworkImpressions.create(
      impressionData
    );
    if (!uploadArtworkImpression) {
      await Artworkuploads.findOneAndDelete({ art_id: uploadArt.art_id });
      throw new ServerError("Unable to complete operation, please try again");
    }

    return NextResponse.json(
      {
        message: "Artwork uploaded",
        data: {
          id: uploadArt.art_id,
          _id: uploadArt._id,
          gallery_id: uploadArt.gallery_id,
        },
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
