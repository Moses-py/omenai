"use client";
import { galleryArtworkUploadStore } from "@/store/gallery/gallery_artwork_upload/GalleryArtworkUpload";
import { ChangeEvent } from "react";

type ArtworkSelectInputProps = {
  label: string;
  items?: string[];
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  required: boolean;
};
export default function ArtworkSelectInput({
  label,
  items,
  name,
  required,
}: ArtworkSelectInputProps) {
  const [updateArtworkUploadData] = galleryArtworkUploadStore((state) => [
    state.updateArtworkUploadData,
  ]);
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-dark/80 font-medium text-[0.95rem]">
        {label}
      </label>
      <select
        onChange={(e) => updateArtworkUploadData(name, e.target.value)}
        required={required}
        className="border-0 border-b bg-transparent ring-0  border-b-dark/20 w-full p-2 focus:border-b-dark focus:ring-0 placeholder:font-light placeholder:text-base-theme text-base-theme"
      >
        <option value="">Select</option>
        {items!.map((item, index) => {
          return (
            <option
              key={index}
              value={item}
              className="p-3 font-light text-base-theme"
            >
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}
