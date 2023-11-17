import { Schema, model, models } from "mongoose";

const salesActivity = new Schema(
  {
    month: { type: String, required: true },
    year: { type: String, required: true },
    value: { type: Number, required: true },
    gallery_id: { type: String, required: true },
  },
  { timestamps: true }
);

export const SalesActivity =
  models.SalesActivity || model("SalesActivity", salesActivity);
