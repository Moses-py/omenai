import bcrypt from "bcrypt";
import {
  ConflictError,
  ServerError,
} from "@/custom/errors/dictionary/errorDictionary";
import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { hashPassword } from "@/lib/hash/hashPassword";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { NextResponse } from "next/server";
import { AccountGallery } from "@/models/auth/GallerySchema";

export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const { password, id } = await request.json();

    const filter = { gallery_id: id };

    const gallery = await AccountGallery.findOne(filter, "password");

    const isPasswordMatch = bcrypt.compareSync(password, gallery.password);

    if (isPasswordMatch)
      throw new ConflictError(
        "Your new password cannot be identical to your old password"
      );

    const hash = hashPassword(password);

    if (!hash)
      throw new ServerError("A server error has occured, please try again");

    const update = { password: hash };

    const updateAccountInfo = await AccountGallery.updateOne(filter, update);

    if (!updateAccountInfo)
      throw new ServerError("A server error has occured, please try again");

    return NextResponse.json({ message: "Password updated!" }, { status: 200 });
  } catch (error) {
    const error_response = handleErrorEdgeCases(error);

    return NextResponse.json(
      { message: error_response?.message },
      { status: error_response?.status }
    );
  }
}
