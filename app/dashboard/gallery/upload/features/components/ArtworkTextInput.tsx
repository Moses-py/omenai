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
  onChange,
  name,
  required,
}: ArtworkTextInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-base-theme font-light text-base">
        {label}
      </label>
      <input
        required={required}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className="border-0 border-b border-b-dark/20 w-full py-3 px-0 focus:border-b-dark focus:ring-0 placeholder:font-light placeholder:text-gray-200 "
      />
    </div>
  );
}
