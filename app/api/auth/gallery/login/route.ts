import { getApiUrl } from "@/config";
import {
  ConflictError,
  RateLimitExceededError,
} from "@/custom/errors/dictionary/errorDictionary";
import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { limiter } from "@/lib/auth/limiter";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { AccountGallery } from "@/models/auth/GallerySchema";
import bcrypt from "bcrypt";
import { NextResponse, NextResponse as res } from "next/server";

type UserReturn = {
  gallery_id: string;
  verified: boolean;
  password: string;
};

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { email, password, ip } = data;

    const { success } = await limiter.limit(ip);

    if (!success)
      throw new RateLimitExceededError("Too many requests, try again later.");

    await connectMongoDB();

    const user = await AccountGallery.findOne<UserReturn>(
      { email },
      "gallery_id verified password"
    ).exec();

    if (!user) throw new ConflictError("Invalid credentials");

    const isPasswordMatch = bcrypt.compareSync(password, user.password);

    if (!isPasswordMatch) throw new ConflictError("Invalid credentials");

    const { gallery_id, verified } = user;

    return res.json(
      {
        message: "Login successfull",
        id: gallery_id,
        verified,
        type: "gallery",
      },
      { status: 201 }
    );
  } catch (error) {
    const error_response = handleErrorEdgeCases(error);
    return NextResponse.json(
      { message: error_response?.message },
      { status: error_response?.status }
    );
  }
}
