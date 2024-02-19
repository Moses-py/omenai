import { ForbiddenError } from "@/custom/errors/dictionary/errorDictionary";
import { ServerError } from "@/custom/errors/dictionary/errorDictionary";
import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { sendOrderRequestReceivedMail } from "@/emails/models/orders/orderRequestReceived";
import { sendOrderRequestToGalleryMail } from "@/emails/models/orders/orderRequestToGallery";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { Artworkuploads } from "@/models/artworks/UploadArtworkSchema";
import { AccountGallery } from "@/models/auth/GallerySchema";
import { AccountIndividual } from "@/models/auth/IndividualSchema";
import { CreateOrder } from "@/models/orders/CreateOrderSchema";
import { getCurrentDate } from "@/utils/getCurrentDate";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const {
      buyer_id,
      art_id,
      gallery_id,
      save_shipping_address,
      shipping_address,
    } = await request.json();

    const buyerData = await AccountIndividual.findOne(
      { user_id: buyer_id },
      "_id name email user_id"
    ).exec();
    const gallery_data = await AccountGallery.findOne(
      { gallery_id },
      "name email"
    ).exec();

    const artwork = await Artworkuploads.findOne(
      { art_id },
      "title artist pricing url art_id"
    ).exec();

    if (!buyerData || !artwork)
      throw new ServerError("An error was encountered. Please try again");

    const isOrderPresent = await CreateOrder.findOne({
      "buyer.email": buyerData.email,
      "artwork_data.art_id": artwork.art_id,
    });

    if (isOrderPresent)
      throw new ForbiddenError(
        "Order already exists and is being processed, Please be patient."
      );
    else {
      const createOrder = await CreateOrder.create({
        gallery_id,
        artwork_data: artwork,
        buyer: buyerData,
        shipping_address,
        shipping_quote: {
          shipping_fees: "",
          taxes: "",
        },
        payment_information: {
          status: "pending",
          transaction_value: "",
          transaction_date: "",
          transaction_reference: "",
        },
        tracking_information: {
          tracking_id: "",
          tracking_link: "",
        },
        order_accepted: {
          status: "",
          reason: "",
        },
      });

      if (!createOrder)
        throw new ServerError(
          "An error was encountered while creating this order. Please try again"
        );

      if (save_shipping_address) {
        await AccountIndividual.updateOne(
          { user_id: buyer_id },
          { $set: { address: shipping_address } }
        );
      }

      const date = getCurrentDate();
      await sendOrderRequestToGalleryMail({
        name: gallery_data.name,
        email: gallery_data.email,
        buyer: buyerData.name,
        date,
        artwork_data: artwork,
      });

      await sendOrderRequestReceivedMail({
        name: buyerData.name,
        email: buyerData.email,
        artwork_data: artwork,
      });

      return NextResponse.json(
        {
          message: "Order created",
        },
        { status: 200 }
      );
    }
  } catch (error) {
    const error_response = handleErrorEdgeCases(error);

    return NextResponse.json(
      { message: error_response?.message },
      { status: error_response?.status }
    );
  }
}
