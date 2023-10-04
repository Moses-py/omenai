import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { AccountIndividual } from "@/models/auth/IndividualSchema";
import { parseRegisterData } from "@/lib/auth/parseRegisterData";
import { NextResponse as res } from "next/server";
import generateString from "@/utils/generateString";
import { sendIndividualMail } from "@/emails/models/individuals/sendIndividualMail";
import { VerificationCodes } from "@/models/auth/verification/codeTimeoutSchema";
import { ServerError } from "@/custom/errors/dictionary/errorDictionary";

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
      throw new ServerError("A server error has occured, please try again");

    const storeVerificationCode = await VerificationCodes.create({
      code: email_token,
      author: saveData.user_id,
    });

    if (!storeVerificationCode)
      throw new ServerError("A server error has occured, please try again");

    await sendIndividualMail({
      name: saveData.name,
      email: saveData.email,
      token: email_token,
    });

    const { user_id } = saveData;

    return res.json({
      status: 201,
      message: "User successfully registered",
      data: user_id,
    });
  } catch (error) {
    return res.json(error, { status: 500 });
  }
}
