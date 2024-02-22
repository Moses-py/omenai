/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { galleryLoginStore } from "@/store/auth/login/GalleryLoginStore";
import { handleKeyPress } from "@/utils/disableSubmitOnEnter";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";
import FormActions from "./FormActions";

type Form = {
  email: string;
  password: string;
};

export default function FormInput() {
  const router = useRouter();

  const [setIsLoading] = galleryLoginStore((state) => [state.setIsloading]);

  const [form, setForm] = useState<Form>({ email: "", password: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading();
    try {
      const { ok, error }: any = await signIn("gallery-login", {
        ...form,
        redirect: false,
      });

      if (ok) {
        const session = await getSession();
        if (session?.user) {
          if (!session.user.verified) {
            // Redirect to verification page
            await signOut({
              callbackUrl: `/verify/gallery/${session.user.id}`,
            });
          } else {
            toast.success("Login successful...redirecting!");
            router.refresh();
            router.replace("/dashboard/gallery/overview");
          }
        }
      } else {
        toast.error(error);
      }
    } catch (error) {
      console.error("Authentication error:", error);
      // Handle the error as needed
    } finally {
      setIsLoading();
    }
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
          name="email"
          value={form.email}
          className="border-0 focus:ring-0 border-b-[1px] border-b-dark/20 outline-none focus:outline-none focus:border-b-dark transition-all duration-200 ease-in-out ring-0 placeholder:text-dark/40 py-1 px-0"
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
          name="password"
          value={form.password}
          type="password"
          className="border-0 focus:ring-0 border-b-[1px] border-b-dark/20 outline-none focus:outline-none focus:border-b-dark transition-all duration-200 ease-in-out ring-0 placeholder:text-dark/40 py-1 px-0"
          onKeyDown={handleKeyPress}
          onChange={handleChange}
          required
        />
      </div>
      <FormActions />
    </form>
  );
}
