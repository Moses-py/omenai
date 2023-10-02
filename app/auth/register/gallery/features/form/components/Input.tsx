import { validate } from "@/lib/validations/validatorGroup";
import { handleKeyPress } from "@/lib/utils/disableSubmitOnEnter";
import { useGalleryAuthStore } from "@/store/auth/register/GalleryAuthStore";
import { AnimatePresence, motion } from "framer-motion";
import { ChangeEvent, HTMLInputTypeAttribute, useState } from "react";

export type InputProps = {
  label: string;
  labelText: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  buttonType: "button" | "submit" | undefined;
  buttonText: "Next" | "Submit" | undefined;
  onClick?: () => void;
};

type Externals = {
  location: string;
  admin: string;
  description: string;
};
export default function Input({
  label,
  labelText,
  type,
  placeholder,
  disabled = false,
  onChange,
  buttonText,
  buttonType,
}: InputProps) {
  const [
    gallerySignupData,
    currentGallerySignupFormIndex,
    incrementCurrentGallerySignupFormIndex,
    decrementCurrentGallerySignupFormIndex,
  ] = useGalleryAuthStore((state) => [
    state.gallerySignupData,
    state.currentGallerySignupFormIndex,
    state.incrementCurrentGallerySignupFormIndex,
    state.decrementCurrentGallerySignupFormIndex,
  ]);

  const [errorList, setErrorList] = useState<string[]>([]);

  const handleClickPrev = () => {
    setErrorList([]);
    decrementCurrentGallerySignupFormIndex();
  };

  const handleClick = (value: string, label: string) => {
    setErrorList([]);
    const { success, errors }: { success: boolean; errors: string[] | [] } =
      validate(
        value,
        label,
        labelText === "confirmPassword" &&
          (gallerySignupData as Record<string, any>)["password"]
      );
    if (!success) setErrorList(errors);
    else incrementCurrentGallerySignupFormIndex();
  };

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
          onKeyDown={handleKeyPress}
          name={labelText}
          value={(gallerySignupData as Record<string, string>)[labelText]}
        />
        {errorList.length > 0 &&
          errorList.map((error, index) => {
            return (
              <p key={index} className="text-red-600 text-xs">
                {error}
              </p>
            );
          })}
        <div className="self-end flex gap-4">
          <button
            className={`${
              currentGallerySignupFormIndex > 0 ? "block" : "hidden"
            } rounded-full px-[1.5rem] py-[0.4rem] mt-[1rem] bg-secondary text-white hover:bg-secondary/30 transition-all ease-linear duration-200`}
            type={"button"}
            onClick={handleClickPrev}
          >
            back
          </button>
          <button
            className="rounded-full px-[1.5rem] py-[0.4rem] mt-[1rem] bg-primary text-white hover:bg-secondary transition-all ease-linear duration-200"
            type={"button"}
            onClick={() =>
              handleClick(
                (gallerySignupData as Record<string, string>)[labelText],
                labelText
              )
            }
          >
            Next
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
