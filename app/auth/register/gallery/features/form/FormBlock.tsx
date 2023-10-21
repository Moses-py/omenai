import Action from "../actions/Action";
import FormInput from "./components/FormInput";
import { GalleryLogo } from "@/components/logo/Logo";

export default function FormBlock() {
  return (
    <div className="flex-1 grid place-items-center h-full font-normal p-5 relative">
      <div className="flex flex-col gap-[5rem] text-secondary w-full">
        <div className="flex flex-col gap-8 text-center items-center">
          <GalleryLogo />

          <p className="text-base">
            Sign up for an account, don&apos;t worry, it&apos;s quick and easy
          </p>
          <p className="text-base font-medium">Gallery account</p>
        </div>

        <FormInput />
      </div>
      <Action />
    </div>
  );
}
