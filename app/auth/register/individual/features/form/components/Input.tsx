"use client";

import { validate } from "@/lib/validations/validatorGroup";
import { handleKeyPress } from "@/utils/disableSubmitOnEnter";
import { useIndividualAuthStore } from "@/store/auth/register/IndividualAuthStore";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Input({
  label,
  labelText,
  type,
  placeholder,
  disabled = false,
  onChange,
  id,
}: InputProps) {
  const [
    currentSignupFormIndex,
    individualSignupData,
    incrementCurrentSignupFormIndex,
    decrementCurrentSignupFormIndex,
  ] = useIndividualAuthStore((state) => [
    state.currentSignupFormIndex,
    state.individualSignupData,
    state.incrementCurrentSignupFormIndex,
    state.decrementCurrentSignupFormIndex,
  ]);

  const [errorList, setErrorList] = useState<string[]>([]);

  const handleClickPrev = () => {
    setErrorList([]);
    decrementCurrentSignupFormIndex();
  };

  const handleClick = (value: string, label: string) => {
    setErrorList([]);
    const { success, errors }: { success: boolean; errors: string[] | [] } =
      validate(
        value,
        label,
        labelText === "confirmPassword" &&
          (individualSignupData as Record<string, any>)["password"]
      );
    if (!success) setErrorList(errors);
    else incrementCurrentSignupFormIndex();
  };

  return (
    <AnimatePresence key={id}>
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
          className=" border-0 focus:ring-0 border-b-[1px] px-0 border-b-primary outline-none focus:outline-none focus:border-b-dark transition-all duration-200 ease-in-out ring-0 placeholder:text-dark/40 py-2"
          placeholder={`e.g ${placeholder}`}
          disabled={disabled}
          onChange={onChange}
          name={labelText}
          onKeyDown={handleKeyPress}
          value={(individualSignupData as Record<string, string>)[labelText]}
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
              currentSignupFormIndex > 0 ? "block" : "hidden"
            } rounded-full px-[1.5rem] py-[0.4rem] mt-[1rem] bg-dark text-white hover:bg-dark/30 transition-all ease-linear duration-200`}
            type={"button"}
            onClick={handleClickPrev}
          >
            Back
          </button>
          <button
            className="rounded-full px-[1.5rem] py-[0.4rem] mt-[1rem] bg-primary text-white hover:bg-dark transition-all ease-linear duration-200"
            type={"button"}
            onClick={() =>
              handleClick(
                (individualSignupData as Record<string, any>)[labelText],
                labelText
              )
            }
          >
            {"Next"}
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
