import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const transactions = new Schema<TransactionModelSchemaTypes>(
  {
    trans_reference: { type: String, default: () => uuidv4() },
    trans_amount: { type: Number, required: true },
    trans_date: { type: Date, required: true },
    trans_owner_id: { type: String, required: true },
    trans_wallet_id: { type: String, required: true },
    trans_type: { type: String, required: true },
  },
  { timestamps: true }
);

export const Transactions =
  mongoose.models.Transactions || mongoose.model("Transactions", transactions);
