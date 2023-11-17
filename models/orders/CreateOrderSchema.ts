import mongoose, { Schema, model, models } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const createOrder = new Schema(
  {
    artwork_data: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Artworkuploads",
    },
    buyer: { type: mongoose.Schema.Types.ObjectId, ref: "AccountIndividual" },
    gallery_id: { type: String, required: true },
    order_id: { type: String, default: () => uuidv4(), unique: true },
    status: { type: String, required: true, default: "pending" },
  },
  { timestamps: true }
);

export const CreateOrder =
  mongoose.models.CreateOrder || mongoose.model("CreateOrder", createOrder);
