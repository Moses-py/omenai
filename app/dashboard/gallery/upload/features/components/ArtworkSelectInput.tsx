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
  onChange,
  name,
  required,
}: ArtworkSelectInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-base-theme font-light text-base">
        {label}
      </label>
      <select
        onChange={onChange}
        required={required}
        className="border-0 border-b border-b-dark/20 w-full py-3 px-2 focus:border-b-dark focus:ring-0 placeholder:font-light placeholder:text-base-theme text-base-theme"
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
