"use client";
import { validate } from "@/lib/validations/upload_artwork_input_validator/validator";
import { galleryArtworkUploadStore } from "@/store/gallery/gallery_artwork_upload/GalleryArtworkUpload";
import { ChangeEvent, useState } from "react";

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
  const [updateArtworkUploadData, updateErrorField] = galleryArtworkUploadStore(
    (state) => [state.updateArtworkUploadData, state.updateErrorField]
  );

  const [errorList, setErrorList] = useState<string[]>([]);

  const handleChange = (value: string, label: string) => {
    setErrorList([]);
    const { success, errors }: { success: boolean; errors: string[] | [] } =
      validate(label, value);
    if (!success) {
      setErrorList(errors);
      updateErrorField(label, value);
    } else {
      updateArtworkUploadData(label, value);
      updateErrorField(label, "");
    }
  };

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
        onChange={(e) => handleChange(e.target.value, name)}
        className="border-0 border-b ring-0  border-b-dark/20 w-full py-3 px-0 focus:border-b-dark focus:ring-0 placeholder:font-light placeholder:text-gray-200 "
      />
      {errorList.length > 0 &&
        errorList.map((error, index) => {
          return (
            <p key={index} className="text-red-600 text-xs">
              {error}
            </p>
          );
        })}
    </div>
  );
}
