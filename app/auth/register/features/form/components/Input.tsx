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
  key: number;
  prev?: boolean;
  onClickPrev?: () => void;
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
  key,
  prev = false,
  onClickPrev,
}: InputProps) {
  return (
    <AnimatePresence key={key}>
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
          className="border-b-[1px] border-b-primary outline-none focus:outline-none focus:ring-0 ring-0 placeholder:text-secondary/40 py-2"
          placeholder={`e.g ${placeholder}`}
          disabled={disabled}
          onChange={onChange}
        />
        <div className="self-end flex gap-4">
          <button
            className={`${
              prev ? "block" : "hidden"
            } rounded-full px-[2rem] py-[0.5rem] mt-[1rem] bg-secondary text-white hover:bg-secondary/30 transition-all ease-linear duration-200`}
            type={buttonType}
            onClick={onClickPrev}
          >
            back
          </button>
          <button
            className="rounded-full px-[2rem] py-[0.5rem] mt-[1rem] bg-primary text-white hover:bg-secondary transition-all ease-linear duration-200"
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
