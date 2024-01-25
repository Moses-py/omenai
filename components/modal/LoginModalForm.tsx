"use client";
import FormActions from "@/app/auth/login/individual/features/form/components/FormActions";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { IndividualLogo } from "../logo/Logo";
import LoginModalFormActions from "./LoginModalFormActions";

export default function LoginModalForm() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2 my-4">
        <IndividualLogo />
        <h1 className="text-base text-dark font-medium mt-3 mb-5">
          Login to your account
        </h1>
      </div>

      <form className="container flex flex-col gap-[1rem] my-4">
        <div className="flex flex-col">
          <label htmlFor={"email"} className="text-base">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="focus:ring-0 border-0 px-0  border-b-[1px] border-b-primary outline-none focus:outline-none focus:border-b-secondary transition-all duration-200 ease-in-out ring-0 placeholder:text-secondary/40 py-1"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor={"email"} className="text-base">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="focus:ring-0 border-0 px-0 border-b-[1px] border-b-primary outline-none focus:outline-none focus:border-b-secondary transition-all duration-200 ease-in-out ring-0 placeholder:text-secondary/40 py-1"
            required
          />
        </div>
        <LoginModalFormActions />
      </form>
    </>
  );
}
