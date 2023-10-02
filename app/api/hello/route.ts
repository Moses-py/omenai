import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import IndividualLogin from "@/models/auth/login/IndividualLoginSchema";
import { MongoServerError } from "mongodb";
import { MongooseError } from "mongoose";
import { NextResponse } from "next/server";

type LoginDataProps = {
  name: string;
};
export async function POST(request: Request) {
  await connectMongoDB();

  try {
    const { name }: LoginDataProps = await request.json();

    if (!name) {
      return new NextResponse("Invalid request data: name is required", {
        status: 400,
      });
    } else {
      const response = await IndividualLogin.create({ name });

      if (!response) new NextResponse("Unsuccessful");

      return NextResponse.json(
        { message: "Save was successful", data: response },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { err: "Something went wrong" },
      {
        status: 400,
      }
    );
  }
}
