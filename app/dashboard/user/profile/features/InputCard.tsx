"use client";
import clsx from "clsx";
import { ReactNode, useState } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  rightComponent?: ReactNode;
};
export const InputCard = (props: Props) => {
  const { label, className, id, onFocus, onBlur, rightComponent, ...rest } =
    props;

  const [focus, setFocus] = useState(false);
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-base text-primary">
        {label}
      </label>
      <div
        className={clsx(
          "flex items-center justify-between border-b-[1px] border-b-primary py-1 px-1",
          focus ? "outline-none border-b-secondary" : ""
        )}
      >
        <input
          className={clsx(
            "w-full outline-none transition-all duration-200 ease-in-out ring-0 placeholder:text-secondary/40 ",
            className
          )}
          onFocus={(e) => {
            setFocus(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocus(true);
            onBlur?.(e);
          }}
          {...rest}
        />
        {rightComponent}
      </div>
    </div>
  );
};
