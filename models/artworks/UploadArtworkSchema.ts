import { Schema, model, models } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const artworkUpload = new Schema<ArtworkSchemaTypes>(
  {
    artist: { type: String, required: true },
    year: { type: String, required: true },
    title: { type: String, required: true, unique: true },
    medium: { type: String, required: true },
    rarity: { type: String, required: true },
    materials: { type: String, required: true },
    dimensions: {
      height: { type: String, required: true },
      width: { type: String, required: true },
      depth: { type: String, required: false },
    },
    pricing: {
      price: { type: String, required: true },
      shouldShowPrice: { type: Boolean, required: true },
    },
    art_id: { type: String, default: () => uuidv4(), unique: true },
    gallery_id: { type: String, required: true },
    url: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export const Artworkuploads =
  models.Artworkuploads || model("Artworkuploads", artworkUpload);
