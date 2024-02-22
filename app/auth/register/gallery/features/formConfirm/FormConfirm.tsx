"use client";
import { useGalleryAuthStore } from "@/store/auth/register/GalleryAuthStore";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import LoaderAnimation from "@/components/loader/LoaderAnimation";

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
            className={`  px-[1.5rem] py-[0.4rem] mt-[1rem] bg-dark text-white hover:bg-dark/50 transition-all ease-linear duration-200`}
            type={"button"}
            onClick={decrementCurrentGallerySignupFormIndex}
          >
            Back
          </button>
          <button
            disabled={isLoading}
            className=" disabled:bg-gray-400 disabled:cursor-not-allowed px-[1.5rem] py-[0.4rem] mt-[1rem] flex justify-center items-end bg-dark text-white hover:bg-dark transition-all ease-linear duration-300"
            type={"submit"}
          >
            {isLoading ? <LoaderAnimation theme="dark" /> : "Submit"}
          </button>
        </div>
      </div>
    </AnimatePresence>
  );
}
