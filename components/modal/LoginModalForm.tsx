"use client";
import { IndividualLogo } from "../logo/Logo";
import LoginModalFormActions from "./LoginModalFormActions";

import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { handleSignIn } from "@/services/login/ModalLogin";
import { handleKeyPress } from "@/utils/disableSubmitOnEnter";
import { actionStore } from "@/store/actions/ActionStore";

export default function LoginModalForm() {
  const queryClient = useQueryClient();

  const [toggleLoginModal] = actionStore((state) => [state.toggleLoginModal]);

  const [loading, setIsLoading] = useState(false);

  const [form, setForm] = useState<Form>({ email: "", password: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const { mutateAsync: loginFromModal } = useMutation({
    mutationFn: async () => handleSignIn(form),
    onSuccess: async (data) => {
      if (data?.isOk) {
        await queryClient.invalidateQueries({ queryKey: ["navbar_data"] });
        await queryClient.invalidateQueries();
        if (data.message !== "") {
          toast.success(data.message);
        }
        toggleLoginModal(false);
      } else {
        toast.error(data?.message);
      }
    },
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await loginFromModal();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2 my-4">
        <IndividualLogo />
        <h1 className="text-base text-dark font-medium mt-3 mb-5">
          Login to your account
        </h1>
      </div>

      <form
        className="container flex flex-col gap-[1rem] my-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label htmlFor={"email"} className="text-base">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            className="focus:ring-0 border-0 px-0  border-b-[1px] border-b-primary outline-none focus:outline-none focus:border-b-secondary transition-all duration-200 ease-in-out ring-0 placeholder:text-secondary/40 py-1"
            required
            onChange={handleChange}
            onKeyDown={handleKeyPress}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor={"email"} className="text-base">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            className="focus:ring-0 border-0 px-0 border-b-[1px] border-b-primary outline-none focus:outline-none focus:border-b-secondary transition-all duration-200 ease-in-out ring-0 placeholder:text-secondary/40 py-1"
            required
            onChange={handleChange}
            onKeyDown={handleKeyPress}
          />
        </div>
        <LoginModalFormActions loading={loading} />
      </form>
    </>
  );
}
