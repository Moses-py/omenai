import { ConflictError } from "@/custom/errors/dictionary/errorDictionary";
import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import {
  AccountGallery,
  type GallerySchemaTypes,
} from "@/models/auth/GallerySchema";
import bcrypt from "bcrypt";
import { NextResponse, NextResponse as res } from "next/server";

export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const data = await request.json();

    const { email, password } = data;

    const user = await AccountGallery.findOne<GallerySchemaTypes>(
      { email },
      {
        gallery_id: 1,
        password: 1,
      }
    );

    if (!user) throw new ConflictError("Invalid credentials");

    const isPasswordMatch = bcrypt.compareSync(password, user.password);

    if (!isPasswordMatch) throw new ConflictError("Invalid credentials");

    const { gallery_id } = user;

    return res.json({
      status: 201,
      message: "Login successfull",
      id: gallery_id,
    });
  } catch (error) {
    const error_response = handleErrorEdgeCases(error);
    return NextResponse.json(
      { message: error_response?.message },
      { status: error_response?.status }
    );
  }
}
