import Link from "next/link";
import React from "react";

export default function FormActions() {
  return (
    <div className="flex flex-col mt-[1rem] gap-4 self-end">
      <p className="font-medium text-base">
        Forgot password?{" "}
        <Link href="/" className="text-primary">
          Let us help
        </Link>
      </p>
      <button
        className="rounded-full self-end w-fit px-[1.5rem] py-[0.4rem] bg-primary text-white hover:bg-secondary transition-all ease-linear duration-200"
        type={"submit"}
      >
        Login
      </button>
    </div>
  );
}
