import { Schema, model, models } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const individualSignupSchema = new Schema({
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
  createdAt: {
    type: Date,
    default: () => new Date(),
  },
  email_token: {
    type: String,
  },
  verified: {
    type: Boolean,
    required: true,
    default: () => false,
  },
  verification_token: {
    type: String,
  },
});

export const AccountIndividual =
  models.AccountIndividual ||
  model("AccountIndividual", individualSignupSchema);
