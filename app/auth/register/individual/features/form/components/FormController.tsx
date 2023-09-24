"use client";

import Input from "./Input";
import Preferences from "../../preferences/Preferences";
import { useIndividualAuthStore } from "@/store/auth/register/IndividualAuthStore";
import { ChangeEvent } from "react";
import { inputProperties } from "@/mocks/input/individual/InputMock";

export default function FormController() {
  const [currentSignupFormIndex, updateSignUpData] = useIndividualAuthStore(
    (state) => [state.currentSignupFormIndex, state.updateSignUpData]
  );

  let form = inputProperties[currentSignupFormIndex];

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let fieldName = e.target.name;
    updateSignUpData(fieldName, e.target.value);
  }

  return (
    <>
      {currentSignupFormIndex < inputProperties.length && (
        <Input
          label={form.label}
          type={form.type}
          placeholder={form.placeholder}
          labelText={form.labelText}
          id={form.id}
          onChange={handleChange}
        />
      )}

      {currentSignupFormIndex === inputProperties.length && <Preferences />}
    </>
  );
}
