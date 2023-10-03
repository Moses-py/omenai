import { Schema, model, models } from "mongoose";

const verificationCodeSchema = new Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: String,
    },
  },
  { timestamps: true }
);

verificationCodeSchema.index({ createdAt: 1 }, { expireAfterSeconds: 600 });

export const VerificationCodes =
  models.VerificationCodes ||
  model("VerificationCodes", verificationCodeSchema);
