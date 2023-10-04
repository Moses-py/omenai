import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { AccountIndividual } from "@/models/auth/IndividualSchema";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const data = await request.json();

    const { email, password } = data;

    const user = await AccountIndividual.findOne<AccountIndividual>({ email });

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

    const { user_id } = user;

    return NextResponse.json({
      status: 201,
      message: "Successfully registered",
      id: user_id,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("Error encountered");
  }
}
