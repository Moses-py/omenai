"use client";
import clsx from "clsx";
import { useState } from "react";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
};
export const TextareaCard = (props: Props) => {
  const { label, className, id, onFocus, onBlur, ...rest } = props;

  const [focus, setFocus] = useState(false);

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-base font-light text-dark">
        {label}
      </label>
      <div className={clsx("flex items-center justify-between py-1")}>
        <textarea
          className={clsx(
            "w-full border-0 border-b border-b-base-theme/20 focus:ring-0 focus:outline-none focus:border-b-dark ring-0 placeholder:text-secondary/40 ",
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
      </div>
    </div>
  );
};
