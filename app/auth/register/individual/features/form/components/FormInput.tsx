"use client";

import { useIndividualAuthStore } from "@/store/auth/register/IndividualAuthStore";
import FormController from "./FormController";
import { FormEvent } from "react";
import { registerAccount } from "@/services/register/registerAccount";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function FormInput() {
  const [individualSignupData, preferences, setIsLoading, clearData] =
    useIndividualAuthStore((state) => [
      state.individualSignupData,
      state.preferences,
      state.setIsloading,
      state.clearData,
    ]);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading();
    const { name, email, password } = individualSignupData;
    const data = {
      name,
      email,
      password,
      preferences,
    };

    const response = await registerAccount(data, "individual");

    if (response.isOk) {
      toast.success(response.body.message + " redirecting...");
      router.push(`/verify/individual/${response.body.data}`);
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
