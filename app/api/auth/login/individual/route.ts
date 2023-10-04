import { ConflictError } from "@/custom/errors/dictionary/errorDictionary";
import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { AccountIndividual } from "@/models/auth/IndividualSchema";
import bcrypt from "bcrypt";
import { NextResponse as res } from "next/server";

export async function POST(request: Request) {
  try {
    await connectMongoDB();

    const data = await request.json();

    const { email, password } = data;

    const user = await AccountIndividual.findOne<AccountIndividual>({ email });

    if (!user) throw new ConflictError("Invalid credentials");

    const isPasswordMatch = bcrypt.compareSync(password, user.password);

    if (!isPasswordMatch) throw new ConflictError("Invalid credentials");

    const { user_id } = user;

    return res.json({
      status: 201,
      message: "Successfully registered",
      id: user_id,
    });
  } catch (error) {
    return handleErrorEdgeCases(error);
  }
}
