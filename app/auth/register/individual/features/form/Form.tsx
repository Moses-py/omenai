import Image from "next/image";
import Action from "../actions/Action";
import FormInput from "./components/FormInput";
import Link from "next/link";
import { IndividualLogo } from "@/components/logo/Logo";

export default function Form() {
  return (
    <div className="flex-1 grid place-items-center h-full font-normal p-5 relative">
      <div className="flex flex-col gap-[1.8rem] text-secondary w-full">
        <div className="flex flex-col gap-4 text-center items-center">
          <IndividualLogo />
          <p className="text-base">
            Sign up for an account, don&apos;t worry, it&apos;s quick and easy
          </p>
          <p className="text-base font-medium">Individual account</p>
        </div>
        <FormInput />
      </div>
      <Action />
    </div>
  );
}
