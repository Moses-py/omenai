"use client";
import { FormEvent } from "react";
import FormController from "./FormController";
import { useGalleryAuthStore } from "@/store/auth/register/GalleryAuthStore";

export default function FormInput() {
  const [gallerySignupData] = useGalleryAuthStore((state) => [
    state.gallerySignupData,
  ]);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, password, admin, location, description } =
      gallerySignupData;
    const data = { name, email, password, admin, location, description };

    alert("Form submitted");
    console.log(data);
  };
  return (
    <div className="container">
      <form
        className="flex flex-col justify-end gap-4 w-full container lg:px-[2rem] xl:px-[4rem] 2xl:px-[7rem]"
        onSubmit={handleSubmit}
      >
        <FormController />
      </form>
    </div>
  );
}
