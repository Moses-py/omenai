import { Schema, model, models } from "mongoose";

const gallerySignupSchema = new Schema({
  gallery_name: {
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
  admin_name: {
    type: String,
    required: true,
    min: 3,
  },
  gallery_email: {
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
});

export const GallerySignupSchema =
  models.gallerySignupSchema ||
  model("GallerySignupSchema", gallerySignupSchema);
