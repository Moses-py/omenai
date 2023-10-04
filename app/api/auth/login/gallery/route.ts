import { ConflictError } from "@/custom/errors/dictionary/errorDictionary";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { AccountGallery } from "@/models/auth/GallerySchema";
import bcrypt from "bcrypt";
import { NextResponse as res } from "next/server";

export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const data = await request.json();

    const { email, password } = data;

    const user = await AccountGallery.findOne<AccountGallery>({ email });

    if (!user) throw new ConflictError("Invalid credentials");

    const isPasswordMatch = bcrypt.compareSync(password, user.password);

    if (!isPasswordMatch) throw new ConflictError("Invalid credentials");

    const { gallery_id } = user;

    return res.json({
      status: 201,
      message: "Successfully registered",
      id: gallery_id,
    });
  } catch (error) {
    return res.json(error, { status: 409 });
  }
}
