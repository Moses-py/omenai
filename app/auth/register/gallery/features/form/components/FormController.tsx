"use client";

import { inputProperties } from "@/mocks/input/gallery/inputMock";
import Input from "./Input";
import { useGalleryAuthStore } from "@/store/auth/register/GalleryAuthStore";

export default function FormController() {
  const [currentGallerySignupFormIndex] = useGalleryAuthStore((state) => [
    state.currentGallerySignupFormIndex,
  ]);

  let form = inputProperties[currentGallerySignupFormIndex];

  return (
    <>
      <Input
        label={form.label}
        type={form.type}
        placeholder={form.placeholder}
        buttonType={form.buttonType}
        buttonText={form.buttonText}
        labelText={form.labelText}
      />
    </>
  );
}
