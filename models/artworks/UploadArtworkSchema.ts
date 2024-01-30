import mongoose, { Schema, models } from "mongoose";
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
      weight: { type: String, required: true },
      depth: { type: String, required: false },
    },
    pricing: {
      price: { type: String, required: true },
      shouldShowPrice: { type: String, required: true },
    },
    art_id: { type: String, default: () => uuidv4(), unique: true },
    gallery_id: { type: String, required: true },
    url: { type: String, required: true, unique: true },
    impressions: { type: Number, default: 0 },
    like_IDs: { type: Schema.Types.Mixed, default: [] },
    artist_birthyear: { type: String, required: true },
    artist_country_origin: { type: String, required: true },
    certificate_of_authenticity: { type: String, required: true },
    artwork_description: { type: String },
    framing: { type: String, required: true },
    signature: { type: String, required: true },
    carrier: { type: String, required: true },
  },
  { timestamps: true }
);

export const Artworkuploads =
  models.Artworkuploads || mongoose.model("Artworkuploads", artworkUpload);
