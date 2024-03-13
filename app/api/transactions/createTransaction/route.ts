import { ServerError } from "@/custom/errors/dictionary/errorDictionary";
import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { Transactions } from "@/models/transactions/TransactionSchema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await connectMongoDB();
    const data: Omit<TransactionModelSchemaTypes, "trans_reference"> =
      await request.json();

    const createTransaction = await Transactions.create(data);

    if (!createTransaction)
      throw new ServerError("An error was encountered. Please try again");

    return NextResponse.json(
      {
        message: "Transaction created",
      },
      { status: 200 }
    );
  } catch (error) {
    const error_response = handleErrorEdgeCases(error);

    return NextResponse.json(
      { message: error_response?.message },
      { status: error_response?.status }
    );
  }
}
