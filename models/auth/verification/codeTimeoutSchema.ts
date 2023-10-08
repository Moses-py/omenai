import { Schema, model, models } from "mongoose";

type CodeSchemaTypes = {
  code: string;
  author: string;
};
const verificationCodeSchema = new Schema<CodeSchemaTypes>(
  {
    code: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

verificationCodeSchema.index({ createdAt: 1 }, { expireAfterSeconds: 600 });

export const VerificationCodes =
  models.VerificationCodes ||
  model("VerificationCodes", verificationCodeSchema);
