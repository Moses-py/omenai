"use client";
import { individualLoginStore } from "@/store/auth/login/IndividualLoginStore";
import { handleKeyPress } from "@/utils/disableSubmitOnEnter";
import { getSession, signIn, signOut } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";
import FormActions from "./FormActions";

type Form = {
  email: string;
  password: string;
};

export default function FormInput({ ip }: { ip: string }) {
  const router = useRouter();
  const [setIsLoading] = individualLoginStore((state) => [state.setIsloading]);

  const [form, setForm] = useState<Form>({ email: "", password: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading();

    await signIn("individual-login", { redirect: false, ...form, ip })
      .then(async ({ ok, error }: any) => {
        if (ok) {
          const session = await getSession();
          if (session?.user) {
            toast.success("Login successful...redirecting!");
            if (session?.user.verified) router.replace("/dashboard");
            else {
              await signOut({
                callbackUrl: `/verify/individual/${session?.user.id}`,
              });
            }
          }
        } else toast.error(error);
      })
      .finally(() => setIsLoading());
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
