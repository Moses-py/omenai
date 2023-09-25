"use client";

import { useIndividualAuthStore } from "@/store/auth/register/IndividualAuthStore";
import FormController from "./FormController";
import { FormEvent } from "react";

export default function FormInput() {
  const [individualSignupData, preferences] = useIndividualAuthStore(
    (state) => [state.individualSignupData, state.preferences]
  );
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, password } = individualSignupData;
    const data = {
      name,
      email,
      password,
      preferences,
    };

    alert("Form submitted");
    console.log(data);
  };
  return (
    <div className="container">
      <form
        className="flex flex-col justify-end gap-4 w-full container lg:px-[2rem] xl:px-[4rem] 2xl:px-[7rem]"
        onSubmit={handleSubmit}
      >
        <FormController />
      </form>
    </div>
  );
}
