import { Schema, model, models } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const gallerySignupSchema = new Schema<AccountGallery>(
  {
    name: {
      type: String,
      required: true,
      min: 3,
      unique: true,
    },

    location: {
      type: String,
      required: true,
      min: 3,
    },
    description: {
      type: String,
      required: true,
      min: 3,
    },
    admin: {
      type: String,
      required: true,
      min: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
      max: 16,
    },
    email_verified: {
      type: Boolean,
      required: true,
      default: () => false,
    },
    gallery_verified: {
      type: Boolean,
      required: true,
      default: () => false,
    },
    role: {
      type: String,
      default: "gallery",
    },
    gallery_id: {
      type: String,
      default: () => uuidv4(),
    },
  },
  { timestamps: true }
);

export const AccountGallery =
  models.AccountGallery ||
  model<AccountGallery>("AccountGallery", gallerySignupSchema);
