"use client";
import { validate } from "@/lib/validations/upload_artwork_input_validator/validator";
import { galleryArtworkUploadStore } from "@/store/gallery/gallery_artwork_upload/GalleryArtworkUpload";
import { trimWhiteSpace } from "@/utils/trimWhitePace";
import { ChangeEvent, useState } from "react";

type ArtworkTextInputProps = {
  label: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  required: boolean;
  type?: string;
};
export default function ArtworkTextInput({
  label,
  placeholder,
  name,
  required,
  type = "text",
}: ArtworkTextInputProps) {
  const [updateArtworkUploadData, updateErrorField] = galleryArtworkUploadStore(
    (state) => [state.updateArtworkUploadData, state.updateErrorField]
  );

  const [errorList, setErrorList] = useState<string[]>([]);

  const handleChange = (value: string, label: string) => {
    const trimmedValue = trimWhiteSpace(value);
    setErrorList([]);
    const { success, errors }: { success: boolean; errors: string[] | [] } =
      validate(label, trimmedValue);
    if (!success) {
      setErrorList(errors);
      updateErrorField(label, trimmedValue);
    } else {
      updateArtworkUploadData(label, trimmedValue);
      updateErrorField(label, "");
    }
  };

  return (
    <div
      className={`flex flex-col gap-1 ${
        type === "textarea" && "lg:last:col-span-4 md:last:col-span-2"
      } `}
    >
      <label htmlFor={name} className="text-dark/80 font-medium text-[0.95rem]">
        {label}
      </label>
      {type === "text" && (
        <input
          name={name}
          required={required}
          type="text"
          placeholder={placeholder}
          onChange={(e) => handleChange(e.target.value, name)}
          className="border-0 border-b ring-0  border-b-dark/20 w-full py-2 px-0 focus:border-b-dark focus:ring-0 placeholder:font-light placeholder:text-gray-200 "
        />
      )}
      {type === "textarea" && (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          rows={2}
          onChange={(e) => handleChange(e.target.value, name)}
          className="border-0 border-b ring-0  border-b-dark/20 w-full py-2 px-0 focus:border-b-dark focus:ring-0 placeholder:font-light placeholder:text-gray-200 "
        />
      )}
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
