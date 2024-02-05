export default function AddressTextInput({
  placeholder,
  label,
  name,
}: {
  placeholder: string;
  label: string;
  name: string;
}) {
  return (
    <div className="flex flex-col gap-1 mb-4 px-2">
      <label htmlFor={name} className="text-dark font-medium text-base">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="border-0 border-b ring-0  border-b-dark/20 w-full py-2 px-0 focus:border-b-dark focus:ring-0 placeholder:font-light placeholder:text-gray-200 "
      />
    </div>
  );
}
