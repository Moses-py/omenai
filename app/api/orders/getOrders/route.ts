import { CreateOrder } from "@/models/orders/CreateOrderSchema";
import { ServerError } from "@/custom/errors/dictionary/errorDictionary";
import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";

import { NextResponse } from "next/server";
import { AccountIndividual } from "@/models/auth/IndividualSchema";
import { Artworkuploads } from "@/models/artworks/UploadArtworkSchema";

export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const { id } = await request.json();

    // await AccountIndividual.startSession();
    // await Artworkuploads.startSession();

    const orders = await CreateOrder.find({ gallery_id: id })
      .sort({ updatedAt: -1 })
      .limit(3)
      .populate({ path: "buyer", select: "name" })
      .populate({ path: "artwork_data", select: "title artist pricing url" })
      .exec();

    if (!orders) throw new ServerError("No orders were found");

    return NextResponse.json(
      {
        message: "Successful",
        data: orders,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    const error_response = handleErrorEdgeCases(error);

    return NextResponse.json(
      { message: error_response?.message },
      { status: error_response?.status }
    );
  }
}
