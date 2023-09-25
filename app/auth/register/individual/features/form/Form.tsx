import Image from "next/image";
import Action from "../actions/Action";
import FormInput from "./components/FormInput";
import Link from "next/link";

export default function Form() {
  return (
    <div className="flex-1 grid place-items-center h-full font-normal p-5 relative">
      <div className="flex flex-col gap-[3rem] text-secondary w-full">
        <div className="flex flex-col gap-8 text-center items-center">
          <Link href={"/"}>
            <Image
              src={"/omenai_logo.png"}
              alt="omenai logo"
              width={200}
              height={60}
            />
          </Link>

          <p className="text-base">
            Sign up for an account, don&apos;t worry, it&apos;s quick and easy
          </p>
          <p className="text-sm">Individual account</p>
        </div>
        <FormInput />
      </div>
      <Action />
    </div>
  );
}
