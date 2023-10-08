import { Schema, model, models } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export type GallerySchemaTypes = {
  name: string;
  email: string;
  password: string;
  gallery_id: string;
  admin: string;
  location: string;
  description: string;
  gallery_verified: boolean;
  verified: boolean;
  role: string;
};

const gallerySignupSchema = new Schema<GallerySchemaTypes>(
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
    verified: {
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
  models.AccountGallery || model("AccountGallery", gallerySignupSchema);
