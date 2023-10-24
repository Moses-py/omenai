import { Schema, model, models } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const individualSignupSchema = new Schema<IndividualSchemaTypes>(
  {
    name: {
      type: String,
      required: true,
      min: 3,
      max: 50,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    user_id: {
      type: String,
      default: () => uuidv4(),
    },

    preferences: {
      type: [String],
      required: true,
    },

    verified: {
      type: Boolean,
      required: true,
      default: () => false,
    },

    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

export const AccountIndividual =
  models.AccountIndividual ||
  model("AccountIndividual", individualSignupSchema);
