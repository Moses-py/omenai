"use client";
import { galleryProfileUpdate } from "@/store/gallery/gallery_profile_update/GalleryProfileUpdateStore";
import clsx from "clsx";
import { ChangeEvent } from "react";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  name: string;
};
export const TextareaCard = (props: Props) => {
  const { label, className, name, id, onFocus, onBlur, ...rest } = props;

  const [setProfileUpdateData] = galleryProfileUpdate((state) => [
    state.setProfileUpdateData,
  ]);

  function handleChange(label: string, value: string) {
    setProfileUpdateData(label, value);
  }

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-base font-light text-dark">
        {label}
      </label>
      <div className={clsx("flex items-center justify-between py-1")}>
        <textarea
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            handleChange(name, e.target.value)
          }
          className={clsx(
            "w-full border-0 border-b text-dark border-b-dark/20 focus:ring-0 focus:outline-none focus:border-b-dark ring-0 placeholder:text-dark/40 ",
            className
          )}
          {...rest}
        />
      </div>
    </div>
  );
};
