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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading();
    const { name, email, password } = individualSignupData;
    const data = {
      name,
      email,
      password,
      preferences,
    };

    const response: Promise<{
      isOk: boolean;
      body: { _id: string; message: string; data: string };
    }> = Promise.resolve(registerAccount(data, "individual"));

    response.then((res) => {
      setIsLoading();
      if (res.isOk) {
        toast.success(res.body.message + " redirecting...");
        clearData();
        router.push(`/verify/auth/${res.body.data}`);
      } else {
        toast.error(res.body.message);
      }
    });
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
