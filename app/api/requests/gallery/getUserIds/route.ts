import { NotFoundError } from "@/custom/errors/dictionary/errorDictionary";
import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { AccountGallery } from "@/models/auth/GallerySchema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongoDB();

    const ids: string[] = await AccountGallery.find({}, "gallery_id");

    if (!ids) throw new NotFoundError("No data available");

    return NextResponse.json({ ids }, { status: 200 });
  } catch (error) {
    const error_response = handleErrorEdgeCases(error);

    return NextResponse.json(
      { message: error_response?.message },
      { status: error_response?.status }
    );
  }
}
