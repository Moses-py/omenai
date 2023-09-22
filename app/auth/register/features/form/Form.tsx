import Image from "next/image";
import FormInput from "./components/FormInput";
import Action from "../actions/Action";

export default function Form() {
  return (
    <div className="flex-1 grid place-items-center h-full font-normal p-5 relative">
      <div className="flex flex-col gap-[5rem] text-secondary w-full">
        <div className="flex flex-col gap-8 text-center items-center">
          <Image
            src={"/omenai_logo.png"}
            alt="omenai logo"
            width={200}
            height={60}
          />

          <p className="text-base">
            Sign up for an account, don&apos;t worry, it&apos;s quick and easy
          </p>
          <p className="text-sm">Let&apos;s get to know you</p>
        </div>

        <FormInput />
      </div>
      <Action />
    </div>
  );
}
