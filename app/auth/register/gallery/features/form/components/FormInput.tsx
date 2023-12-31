"use client";
import { FormEvent } from "react";
import FormController from "./FormController";
import { useGalleryAuthStore } from "@/store/auth/register/GalleryAuthStore";
import { registerAccount } from "@/services/register/registerAccount";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function FormInput() {
  const [gallerySignupData, setIsLoading, clearData] = useGalleryAuthStore(
    (state) => [state.gallerySignupData, state.setIsloading, state.clearData]
  );

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading();

    const { name, email, password, admin, location, description } =
      gallerySignupData;
    const payload = { name, email, password, admin, location, description };

    const response = await registerAccount(payload, "gallery");

    if (response.isOk) {
      toast.success(response.body.message + " redirecting...");
      router.push(`/verify/gallery/${response.body.data}`);
      clearData();
    } else {
      toast.error(response.body.message);
    }
    setIsLoading();
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
