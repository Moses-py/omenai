import mongoose, { Schema } from "mongoose";

const testdb = new Schema(
  {
    date: {
      type: Date,
    },
    changed: { type: Boolean, default: () => false },
  },

  { timestamps: true }
);

export const TestDb =
  mongoose.models.TestDb || mongoose.model("TestDb", testdb);
