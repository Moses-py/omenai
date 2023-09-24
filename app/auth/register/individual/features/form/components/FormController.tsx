"use client";

import Input, { InputProps } from "./Input";
import Preferences from "../../preferences/Preferences";
import { useIndividualAuthStore } from "@/store/auth/register/IndividualAuthStore";
import { ChangeEvent } from "react";
import { validate } from "@/lib/auth/validator";
const inputProperties: Omit<InputProps, "prev" | "onClickPrev">[] = [
  {
    label: "What's your full name please?",
    type: "text",
    placeholder: "Jack Bauear",
    buttonType: "button",
    buttonText: "Next",
    labelText: "name",
    id: 0,
  },
  {
    label: "What email can we reach you on?",
    type: "text",
    placeholder: "Louvre museum",
    buttonType: "button",
    buttonText: "Next",
    labelText: "email",
    id: 1,
  },
  {
    label: "Setup a password to secure your account",
    type: "password",
    placeholder: "********",
    buttonType: "button",
    buttonText: "Next",
    labelText: "password",
    id: 2,
  },
  {
    label: "Just to be sure, please confirm your password",
    type: "password",
    placeholder: "********",
    buttonType: "button",
    buttonText: "Next",
    labelText: "confirmPassword",
    id: 3,
  },
];

export default function FormController() {
  const [
    currentSignupFormIndex,
    incrementCurrentSignupFormIndex,
    decrementCurrentSignupFormIndex,
    updateSignUpData,
    individualSignupData,
  ] = useIndividualAuthStore((state) => [
    state.currentSignupFormIndex,
    state.incrementCurrentSignupFormIndex,
    state.decrementCurrentSignupFormIndex,
    state.updateSignUpData,
    state.individualSignupData,
  ]);

  let form = inputProperties[currentSignupFormIndex];

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let fieldName = e.target.name;
    updateSignUpData(fieldName, e.target.value);
  }

  return (
    <>
      {currentSignupFormIndex <= inputProperties.length - 1 && (
        <Input
          label={form.label}
          type={form.type}
          placeholder={form.placeholder}
          buttonType={form.buttonType}
          buttonText={form.buttonText}
          labelText={form.labelText}
          id={form.id}
          onClick={() =>
            console.log(validate(individualSignupData.name, "name"))
          }
          onClickPrev={decrementCurrentSignupFormIndex}
          onChange={handleChange}
        />
      )}

      {currentSignupFormIndex === inputProperties.length && <Preferences />}
    </>
  );
}
