import { useGalleryAuthStore } from "@/store/auth/register/GalleryAuthStore";
import { AnimatePresence, motion } from "framer-motion";
import { HTMLInputTypeAttribute } from "react";

export type InputProps = {
  label: string;
  labelText: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  disabled?: boolean;
  onChange?: () => void;
  buttonType: "button" | "submit";
  buttonText: "Next" | "Submit";
  onClick?: () => void;
};
export default function Input({
  label,
  labelText,
  type,
  placeholder,
  disabled = false,
  onChange,
  onClick,
  buttonText,
  buttonType,
}: InputProps) {
  const [
    currentGallerySignupFormIndex,
    decrementCurrentGallerySignupFormIndex,
  ] = useGalleryAuthStore((state) => [
    state.currentGallerySignupFormIndex,
    state.decrementCurrentGallerySignupFormIndex,
  ]);

  return (
    <AnimatePresence key={currentGallerySignupFormIndex}>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ y: -300 }}
        transition={{ duration: 0.33 }}
        className="flex flex-col gap-2 container"
      >
        <label htmlFor={labelText}>{label}</label>
        <input
          type={type}
          className="border-b-[1px] border-b-primary outline-none focus:outline-none focus:border-b-secondary transition-all duration-200 ease-in-out ring-0 placeholder:text-secondary/40 py-2"
          placeholder={`e.g ${placeholder}`}
          disabled={disabled}
          onChange={onChange}
        />
        <div className="self-end flex gap-4">
          <button
            className={`${
              currentGallerySignupFormIndex > 0 ? "block" : "hidden"
            } rounded-full px-[1.5rem] py-[0.4rem] mt-[1rem] bg-secondary text-white hover:bg-secondary/30 transition-all ease-linear duration-200`}
            type={buttonType}
            onClick={decrementCurrentGallerySignupFormIndex}
          >
            back
          </button>
          <button
            className="rounded-full px-[1.5rem] py-[0.4rem] mt-[1rem] bg-primary text-white hover:bg-secondary transition-all ease-linear duration-200"
            type={buttonType}
            onClick={onClick}
          >
            {buttonText}
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
