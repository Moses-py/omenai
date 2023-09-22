"use client";

import { useEffect, useState } from "react";
import Input, { InputProps } from "./Input";
import { useSearchParams } from "next/navigation";
const inputProperties: Omit<InputProps, "prev" | "onClickPrev">[] = [
  {
    label: "What's the gallery name?",
    type: "text",
    placeholder: "Louvre museum",
    buttonType: "button",
    buttonText: "Next",
    labelText: "name",
    key: 1,
  },
  {
    label: "What's the gallery location?",
    type: "text",
    placeholder: "79, example street, example, Neverland",
    buttonType: "button",
    buttonText: "Next",
    labelText: "location",
    key: 2,
  },
  {
    label: "What's the admin name? (Account controller)",
    type: "text",
    placeholder: "Jack bauer",
    buttonType: "button",
    buttonText: "Next",
    labelText: "admin",
    key: 3,
  },
  {
    label: "What email can we reach you on?",
    type: "text",
    placeholder: "Louvre museum",
    buttonType: "button",
    buttonText: "Next",
    labelText: "email",
    key: 4,
  },
  {
    label: "Can you give a short description of the gallery?",
    type: "text",
    placeholder: "lorem ipsum dolor amit dans emit",
    buttonType: "submit",
    buttonText: "Submit",
    labelText: "description",
    key: 5,
  },
];
export default function FormController() {
  const [currentFormIndex, setCurrentFormIndex] = useState<number>(0);

  let form = inputProperties[currentFormIndex];

  return (
    <>
      <Input
        label={form.label}
        type={form.type}
        placeholder={form.placeholder}
        buttonType={form.buttonType}
        buttonText={form.buttonText}
        labelText={form.labelText}
        key={form.key}
        onClick={
          form.buttonText === "Next"
            ? () => {
                setCurrentFormIndex((prev) => prev + 1);
              }
            : () => {}
        }
        prev={currentFormIndex > 0 ? true : false}
        onClickPrev={() => {
          setCurrentFormIndex((prev) => prev - 1);
        }}
      />
    </>
  );
}
