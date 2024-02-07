import { orderStore } from "@/store/orders/ordersStore";
import { ChangeEvent, HTMLInputTypeAttribute } from "react";

export default function AddressTextInput({
  placeholder,
  label,
  name,
  type,
  required,
  defaultValue,
  disabled,
}: {
  placeholder: string;
  label: string;
  name: string;
  type: HTMLInputTypeAttribute;
  required: boolean;
  defaultValue?: string | undefined;
  disabled?: boolean;
}) {
  const [setAddress] = orderStore((state) => [state.setAddress]);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(name, e.target.value);
  };
  return (
    <div className="flex flex-col gap-1 my-4 px-2">
      <label htmlFor={name} className="text-dark font-medium text-base">
        {label}
      </label>
      <input
        disabled={disabled}
        type="text"
        placeholder={placeholder}
        required={required}
        onChange={handleInputChange}
        defaultValue={defaultValue !== undefined ? defaultValue : ""}
        className="border-0 border-b ring-0 disabled:cursor-not-allowed disabled:text-dark/50 border-b-dark/20 w-full py-2 px-0 focus:border-b-dark focus:ring-0 placeholder:font-light placeholder:text-gray-200 "
      />
    </div>
  );
}
