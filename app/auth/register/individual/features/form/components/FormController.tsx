"use client";

import { useState } from "react";
import Input, { InputProps } from "./Input";
import Preferences from "../../preferences/Preferences";
import { useIndividualAuthStore } from "@/store/auth/register/IndividualAuthStore";
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
    labelText: "conformPassword",
    id: 3,
  },
];
export default function FormController() {
  const [
    currentSignupFormIndex,
    incrementCurrentSignupFormIndex,
    decrementCurrentSignupFormIndex,
  ] = useIndividualAuthStore((state) => [
    state.currentSignupFormIndex,
    state.incrementCurrentSignupFormIndex,
    state.decrementCurrentSignupFormIndex,
  ]);

  let form = inputProperties[currentSignupFormIndex];

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
          onClick={incrementCurrentSignupFormIndex}
          onClickPrev={decrementCurrentSignupFormIndex}
        />
      )}

      {currentSignupFormIndex === inputProperties.length && <Preferences />}
    </>
  );
}
