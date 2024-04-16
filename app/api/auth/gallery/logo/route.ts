import { ConflictError } from "@/custom/errors/dictionary/errorDictionary";
import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { AccountGallery } from "@/models/auth/GallerySchema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const { id, url } = await request.json();

    const updateLogo = await AccountGallery.updateOne(
      { gallery_id: id },
      { $set: { logo: url } }
    );

    // if (!updateLogo) throw new ConflictError("Invalid code");

    return NextResponse.json(
      {
        message: "Logo updated",
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
