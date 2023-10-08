"use client";
import { handleKeyPress } from "@/utils/disableSubmitOnEnter";
import { SignInResponse, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";
import FormActions from "./FormActions";

type Form = {
  email: string;
  password: string;
};

export default function FormInput() {
  const router = useRouter();

  const [form, setForm] = useState<Form>({ email: "", password: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signIn("individual-login", { redirect: false, ...form }).then(
      ({ ok, error }: any) => {
        if (ok) router.replace("/dashboard");
        else toast.error(error);
      }
    );
  };

  return (
    <form
      className="container flex flex-col gap-[1rem]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label htmlFor={"email"} className="text-base">
          Email address
        </label>
        <input
          type="email"
          value={form.email}
          name="email"
          className="border-b-[1px] border-b-primary outline-none focus:outline-none focus:border-b-secondary transition-all duration-200 ease-in-out ring-0 placeholder:text-secondary/40 py-1"
          onKeyDown={handleKeyPress}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor={"email"} className="text-base">
          Password
        </label>
        <input
          value={form.password}
          type="password"
          name="password"
          className="border-b-[1px] border-b-primary outline-none focus:outline-none focus:border-b-secondary transition-all duration-200 ease-in-out ring-0 placeholder:text-secondary/40 py-1"
          onKeyDown={handleKeyPress}
          onChange={handleChange}
          required
        />
      </div>
      <FormActions />
    </form>
  );
}
