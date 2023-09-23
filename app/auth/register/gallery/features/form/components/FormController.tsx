"use client";

import { FormEvent, useState } from "react";
import Input, { InputProps } from "./Input";
import { useGalleryAuthStore } from "@/store/auth/register/GalleryAuthStore";

const inputProperties: Omit<InputProps, "prev" | "onClickPrev">[] = [
  {
    label: "What's the gallery name?",
    type: "text",
    placeholder: "Louvre museum",
    buttonType: "button",
    buttonText: "Next",
    labelText: "name",
  },
  {
    label: "What's the gallery location?",
    type: "text",
    placeholder: "79, example street, example, Neverland",
    buttonType: "button",
    buttonText: "Next",
    labelText: "location",
  },
  {
    label: "What's the admin name? (Account controller)",
    type: "text",
    placeholder: "Jack bauer",
    buttonType: "button",
    buttonText: "Next",
    labelText: "admin",
  },
  {
    label: "What email can we reach you on?",
    type: "text",
    placeholder: "Louvre museum",
    buttonType: "button",
    buttonText: "Next",
    labelText: "email",
  },
  {
    label: "Can you give a short description of the gallery?",
    type: "text",
    placeholder: "lorem ipsum dolor amit dans emit",
    buttonType: "button",
    buttonText: "Next",
    labelText: "description",
  },
  {
    label: "Setup a password to secure your account",
    type: "password",
    placeholder: "********",
    buttonType: "button",
    buttonText: "Next",
    labelText: "password",
  },
  {
    label: "Just to be sure, please confirm your password",
    type: "password",
    placeholder: "********",
    buttonType: "submit",
    buttonText: "Submit",
    labelText: "conformPassword",
  },
];
export default function FormController() {
  const [
    currentGallerySignupFormIndex,
    incrementCurrentGallerySignupFormIndex,
  ] = useGalleryAuthStore((state) => [
    state.currentGallerySignupFormIndex,
    state.incrementCurrentGallerySignupFormIndex,
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
        onClick={() =>
          form.buttonText === "Next" && incrementCurrentGallerySignupFormIndex
        }
      />
    </>
  );
}
