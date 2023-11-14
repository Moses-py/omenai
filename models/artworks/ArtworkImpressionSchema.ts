import { Schema, model, models } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const artworkImpressions = new Schema<
  Pick<
    ArtworkSchemaTypes,
    "artist" | "art_id" | "gallery_id" | "url" | "title"
  > & { impressions: number }
>(
  {
    artist: { type: String, required: true },
    title: { type: String, required: true, unique: true },
    art_id: { type: String, default: () => uuidv4(), unique: true },
    gallery_id: { type: String, required: true },
    url: { type: String, required: true, unique: true },
    impressions: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const ArtworkImpressions =
  models.ArtworkImpressions || model("ArtworkImpressions", artworkImpressions);
