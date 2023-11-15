"use client";
import { galleryArtworkUploadStore } from "@/store/gallery/gallery_artwork_upload/GalleryArtworkUpload";
import { ChangeEvent } from "react";

type ArtworkTextInputProps = {
  label: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  required: boolean;
};
export default function ArtworkTextInput({
  label,
  placeholder,
  name,
  required,
}: ArtworkTextInputProps) {
  const [updateArtworkUploadData] = galleryArtworkUploadStore((state) => [
    state.updateArtworkUploadData,
  ]);

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-dark font-light text-base">
        {label}
      </label>
      <input
        name={name}
        required={required}
        type="text"
        placeholder={placeholder}
        onChange={(e) => updateArtworkUploadData(name, e.target.value)}
        className="border-0 border-b ring-0  border-b-dark/20 w-full py-3 px-0 focus:border-b-dark focus:ring-0 placeholder:font-light placeholder:text-gray-200 "
      />
    </div>
  );
}
