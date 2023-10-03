import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { AccountIndividual } from "@/models/auth/IndividualSchema";
import { parseRegisterData } from "@/lib/auth/parseRegisterData";
import { NextResponse as res } from "next/server";
import generateString from "@/utils/generateString";
import { sendIndividualMail } from "@/emails/models/individuals/sendIndividualMail";
import { VerificationCodes } from "@/models/auth/verification/codeTimeoutSchema";

export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const data = await request.json();

    const parsedData = await parseRegisterData(data);

    const email_token = await generateString();

    const saveData = await AccountIndividual.create({
      ...parsedData,
    });

    if (!saveData)
      return res.json({ status: 400, message: "Unsuccessful operation" });

    const storeVerificationCode = await VerificationCodes.create({
      code: email_token,
      author: saveData.user_id,
    });

    if (!storeVerificationCode)
      return res.json({ status: 400, message: "Unsuccessful operation" });

    await sendIndividualMail({
      name: saveData.name,
      email: saveData.email,
      token: email_token,
    });

    const { user_id } = saveData;

    return res.json({
      status: 201,
      message: "Successfully registered",
      data: user_id,
    });
  } catch (error) {
    console.log(error);
    return new res("Error encountered");
  }
}
