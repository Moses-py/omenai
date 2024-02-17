import { Schema, model, models } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const LockSchema = new Schema<LockModelTypes>(
  {
    lock_id: {
      type: String,
      default: () => uuidv4(),
    },
    user_id: {
      type: String,
      required: true,
      unique: true,
    },
    art_id: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

// LockSchema.index({ createdAt: 1 }, { expireAfterSeconds: 600 });

export const LockMechanism =
  models.LockMechanism || model("LockMechanism", LockSchema);
