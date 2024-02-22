import { GalleryLogo } from "@/components/logo/Logo";
import Action from "../actions/Action";
import FormInput from "./components/FormInput";

export default function Form() {
  return (
    <div className="flex-1 grid place-items-center h-full font-normal p-5 relative">
      <div className="flex flex-col gap-[1rem] text-dark w-full">
        <div className="flex flex-col gap-8 text-center items-center">
          <GalleryLogo />

          <p className="text-base">
            Welcome back. Login to your account to gain access
          </p>
          <p className="text-base font-normal">Gallery account</p>
        </div>
        <div className="lg:px-[2rem] xl:px-[4rem] 2xl:px-[7rem]">
          <FormInput />
        </div>
      </div>
      <Action />
    </div>
  );
}
