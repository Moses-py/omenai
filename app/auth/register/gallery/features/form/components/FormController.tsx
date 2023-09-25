"use client";

import { inputProperties } from "@/mocks/input/gallery/inputMock";
import Input from "./Input";
import { useGalleryAuthStore } from "@/store/auth/register/GalleryAuthStore";
import { ChangeEvent } from "react";
import FormConfirm from "../../formConfirm/FormConfirm";

export default function FormController() {
  const [currentGallerySignupFormIndex, updateGallerySignupData] =
    useGalleryAuthStore((state) => [
      state.currentGallerySignupFormIndex,
      state.updateGallerySignupData,
    ]);

  let form = inputProperties[currentGallerySignupFormIndex];

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let fieldName = e.target.name;
    updateGallerySignupData(fieldName, e.target.value);
  }

  return (
    <>
      {currentGallerySignupFormIndex < inputProperties.length && (
        <Input
          label={form.label}
          type={form.type}
          placeholder={form.placeholder}
          buttonType={form.buttonType}
          buttonText={form.buttonText}
          labelText={form.labelText}
          onChange={handleChange}
        />
      )}

      {currentGallerySignupFormIndex === inputProperties.length && (
        <FormConfirm />
      )}
    </>
  );
}
