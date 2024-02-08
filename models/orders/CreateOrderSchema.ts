import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const createOrder = new Schema(
  {
    artwork_data: { type: Schema.Types.Mixed, required: true },
    buyer: { type: Schema.Types.Mixed, required: true },
    gallery_id: { type: String, required: true },
    order_id: { type: String, default: () => uuidv4(), unique: true },
    status: { type: String, required: true, default: "pending" },
    shipping_address: { type: Schema.Types.Mixed, required: true },
  },
  { timestamps: true }
);

export const CreateOrder =
  mongoose.models.CreateOrder || mongoose.model("CreateOrder", createOrder);
