import { ServerError } from "@/custom/errors/dictionary/errorDictionary";
import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { Artworkuploads } from "@/models/artworks/UploadArtworkSchema";
import { AccountIndividual } from "@/models/auth/IndividualSchema";
import { CreateOrder } from "@/models/orders/CreateOrderSchema";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const { buyer, artwork_data, gallery_id } = await request.json();

    const buyerData = await AccountIndividual.findById(
      buyer,
      "_id name"
    ).exec();

    const artwork = await Artworkuploads.findById(
      artwork_data,
      "title artist pricing url _id"
    ).exec();

    if (!buyerData || !artwork)
      throw new ServerError("An error was encountered. Please try again");

    const createOrder = await CreateOrder.create({
      gallery_id,
      artwork_data: artwork,
      buyer: buyerData,
    });

    if (!createOrder)
      throw new ServerError("An error was encountered. Please try again");

    return NextResponse.json(
      {
        message: "Order created",
        data: { ...createOrder },
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
