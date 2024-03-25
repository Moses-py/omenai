import { create } from "zustand";
import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import { connectMongoDB } from "@/lib/mongo_connect/mongoConnect";
import { Wallet } from "@/models/wallet/WalletSchema";
import { NextResponse } from "next/server";
import { Transactions } from "@/models/transactions/TransactionSchema";
import { generateDigit } from "@/utils/generateToken";
import { getCurrentMonthAndYear } from "@/utils/getCurrentMonthAndYear";
import { SalesActivity } from "@/models/sales/SalesActivity";
import { CreateOrder } from "@/models/orders/CreateOrderSchema";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    await connectMongoDB();

    const verify_transaction = await fetch(
      `https://api.flutterwave.com/v3/transactions/${data.transaction_id}/verify`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.FLW_TEST_SECRET_KEY}`,
        },
      }
    );

    const convert_verify_transaction_json_response =
      await verify_transaction.json();

    if (convert_verify_transaction_json_response.status !== "success") {
      return NextResponse.json(
        {
          message: convert_verify_transaction_json_response.message,
        },
        { status: 404 }
      );
    }

    if (convert_verify_transaction_json_response.data.status !== "successful") {
      return NextResponse.json(
        {
          message: "Transaction failed",
          data: convert_verify_transaction_json_response.data,
        },
        { status: 200 }
      );
    } else {
      const deposit_balance =
        (30 / 100) *
        convert_verify_transaction_json_response.data.charged_amount;
      const balance =
        convert_verify_transaction_json_response.data.charged_amount -
        deposit_balance;
      const gallery_wallet_update = await Wallet.findOneAndUpdate(
        { owner_id: data.gallery_id },
        {
          $inc: {
            available_balance: balance,
          },
        },
        { new: true }
      );

      if (!gallery_wallet_update) {
        return NextResponse.json(
          {
            message: "Unable to verify transaction. Please contact support1",
            data: convert_verify_transaction_json_response.data,
          },
          { status: 500 }
        );
      }

      const currentDate = new Date();

      const transaction_data = {
        trans_amount:
          convert_verify_transaction_json_response.data.charged_amount,
        trans_wallet_id: gallery_wallet_update.wallet_id,
        trans_owner_id: data.gallery_id,
        trans_type: "deposit",
        trans_date: currentDate,
      };

      const update_transactions_db = await Transactions.create(
        transaction_data
      );

      if (!update_transactions_db) {
        return NextResponse.json(
          {
            message: "Unable to verify transaction. Please contact support2",
            data: convert_verify_transaction_json_response.data,
          },
          { status: 500 }
        );
      }

      const { month, year } = getCurrentMonthAndYear();

      const create_sales_activity = await SalesActivity.create({
        month,
        year,
        value: balance,
        gallery_id: data.gallery_id,
      });

      if (!create_sales_activity) {
        return NextResponse.json(
          {
            message: "Unable to verify transaction. Please contact support3",
            data: convert_verify_transaction_json_response.data,
          },
          { status: 500 }
        );
      }

      const update_order_data = await CreateOrder.updateOne(
        { order_id: data.order_id },
        {
          $set: {
            payment_information: {
              status: "completed",
              transaction_value:
                convert_verify_transaction_json_response.data.charged_amount,
              transaction_date: currentDate,
              transaction_reference: update_transactions_db.trans_reference,
            },
          },
        }
      );

      if (!update_order_data) {
        return NextResponse.json(
          {
            message: "Unable to verify transaction. Please contact support3",
            data: convert_verify_transaction_json_response.data,
          },
          { status: 500 }
        );
      }

      return NextResponse.json(
        {
          message: "Transaction successful",
          data: convert_verify_transaction_json_response.data,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    const error_response = handleErrorEdgeCases(error);

    return NextResponse.json(
      { message: error_response?.message },
      { status: error_response?.status }
    );
  }
}
