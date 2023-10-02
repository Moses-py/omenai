import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { IndividualSignupSchema } from "@/models/auth/register/IndividualSignupSchema";
import { parseRegisterData } from "@/lib/auth/parseRegisterData";
import { NextResponse as res } from "next/server";
export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const data = await request.json();

    const parsedData = parseRegisterData(data);

    const saveData = await IndividualSignupSchema.create({ ...parsedData });

    if (!saveData)
      return res.json({ status: 400, message: "Unsuccessful operation" });

    return res.json({
      status: 201,
      message: "Successfully registered",
      data: saveData,
    });
  } catch (error) {
    console.log(error);
    return new res("Error encountered");
  }
}
