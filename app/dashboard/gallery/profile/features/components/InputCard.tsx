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

  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={id} className="text-base font-light text-dark">
        {label}
      </label>
      <div className={clsx("flex items-center justify-between py-1 px-1")}>
        <input
          type="text"
          className={clsx(
            "w-full border-0 border-b border-b-base-theme/20 focus:ring-0 focus:outline-none focus:border-b-dark ring-0 text-base-theme placeholder:text-secondary/40 p-2",
            className
          )}
          {...rest}
        />
        {rightComponent}
      </div>
    </div>
  );
};
