"use client";
import { galleryProfileUpdate } from "@/store/gallery/gallery_profile_update/GalleryProfileUpdateStore";
import clsx from "clsx";
import { ChangeEvent, ReactNode } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  rightComponent?: ReactNode;
  labelText: string;
};
export const InputCard = (props: Props) => {
  const {
    label,
    className,
    labelText,
    id,
    onFocus,
    onBlur,
    rightComponent,
    ...rest
  } = props;

  const [setProfileUpdateData] = galleryProfileUpdate((state) => [
    state.setProfileUpdateData,
  ]);

  function handleChange(label: string, value: string) {
    setProfileUpdateData(label, value);
  }

  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={id} className="text-base font-light text-dark">
        {label}
      </label>
      <div className={clsx("flex items-center justify-between py-1 px-1")}>
        <input
          type="text"
          disabled={labelText === "gallery" || labelText === "email"}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange(labelText, e.target.value)
          }
          className={clsx(
            `w-full border-0 border-b ${
              labelText === "email" && "text-dark/40"
            } ${
              labelText === "gallery" && "text-dark/40"
            } border-b-dark/20 focus:ring-0 focus:outline-none disabled:cursor-not-allowed focus:border-b-dark ring-0 text-dark placeholder:text-dark/40 p-2`,
            className
          )}
          {...rest}
        />
        {rightComponent}
      </div>
    </div>
  );
};
