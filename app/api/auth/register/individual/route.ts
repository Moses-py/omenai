import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { AccountIndividual } from "@/models/auth/register/IndividualSignupSchema";
import { parseRegisterData } from "@/lib/auth/parseRegisterData";
import { NextResponse as res } from "next/server";
import generateString from "@/utils/generateString";
import { sendMail } from "@/emails/email_models/individuals/sendMail";

export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const data = await request.json();

    const parsedData = await parseRegisterData(data);

    const email_token = await generateString(30);

    const saveData = await AccountIndividual.create({
      ...parsedData,
      verification_token: email_token,
    });

    if (!saveData)
      return res.json({ status: 400, message: "Unsuccessful operation" });

    const url_string = `${process.env.customUrl}/verify/auth/${saveData.verification_token}`;

    await sendMail({
      name: saveData.name,
      email: saveData.email,
      redirect_uri: url_string,
    });

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
