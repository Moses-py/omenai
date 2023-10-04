import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { AccountGallery } from "@/models/auth/GallerySchema";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const data = await request.json();

    const { email, password } = data;

    const user = await AccountGallery.findOne<AccountGallery>({ email });

    if (!user)
      return NextResponse.json({
        status: 400,
        message: "Invalid credentials",
      });

    const isPasswordMatch = bcrypt.compareSync(password, user.password);

    if (!isPasswordMatch)
      return NextResponse.json({
        status: 400,
        message: "Invalid credentials",
      });

    const { gallery_id } = user;

    return NextResponse.json({
      status: 201,
      message: "Successfully registered",
      id: gallery_id,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("Error encountered");
  }
}
