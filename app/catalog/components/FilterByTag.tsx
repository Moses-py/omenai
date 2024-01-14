"use client";

import { Checkbox, Label } from "flowbite-react";

type FilterByTagTypes = {
  tag: string;
  options: string[];
};
export default function FilterByTag({ tag, options }: FilterByTagTypes) {
  return (
    <div className="flex-col space-y-3">
      <h5>{tag}</h5>
      {options.map((option: string, index: number) => {
        return (
          <div key={index} className="flex items-center gap-2 my-2">
            <Checkbox id={option} className="border border-dark/30" />
            <Label
              htmlFor={option}
              className="text-base text-dark/80 font-light"
            >
              {option}
            </Label>
          </div>
        );
      })}
    </div>
  );
}
