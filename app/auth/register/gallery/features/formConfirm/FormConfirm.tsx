"use client";
import { useGalleryAuthStore } from "@/store/auth/register/GalleryAuthStore";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ClipLoader } from "react-spinners";

export default function FormConfirm() {
  const [decrementCurrentGallerySignupFormIndex, isLoading] =
    useGalleryAuthStore((state) => [
      state.decrementCurrentGallerySignupFormIndex,
      state.isLoading,
    ]);
  return (
    <AnimatePresence>
      <div className="flex flex-col gap-4">
        <p>
          By selecting the Submit button, you are explicitly consenting to and
          acknowledging your understanding of the terms outlined in our{" "}
          <Link
            href={"/"}
            target="__blank"
            className="text-primary font-bold underline"
          >
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link
            href={"/"}
            target="__blank"
            className="text-primary font-bold underline"
          >
            Privacy Policy{" "}
          </Link>
          documents.
        </p>
        <div className="flex gap-4 justify-end my-5">
          <button
            className={` rounded-full px-[1.5rem] py-[0.4rem] mt-[1rem] bg-secondary text-white hover:bg-secondary/30 transition-all ease-linear duration-200`}
            type={"button"}
            onClick={decrementCurrentGallerySignupFormIndex}
          >
            Back
          </button>
          <button
            disabled={isLoading}
            className="rounded-full disabled:bg-gray-400 disabled:cursor-not-allowed px-[1.5rem] py-[0.4rem] mt-[1rem] flex justify-center items-end bg-primary text-white hover:bg-secondary transition-all ease-linear duration-200"
            type={"submit"}
          >
            {isLoading ? <ClipLoader size={20} /> : "Submit"}
          </button>
        </div>
      </div>
    </AnimatePresence>
  );
}
