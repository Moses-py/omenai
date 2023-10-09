"use client";
import { actionStore } from "@/store/actions/ActionStore";
import { galleryLoginStore } from "@/store/auth/login/GalleryLoginStore";
import { ClipLoader } from "react-spinners";

export default function FormActions() {
  const [updateRecoveryModal] = actionStore((state) => [
    state.updateRecoveryModal,
  ]);

  const [isLoading] = galleryLoginStore((state) => [state.isLoading]);
  return (
    <div className="flex flex-col mt-[1rem] gap-4 self-end">
      <p className="font-medium text-base">
        Forgot password?{" "}
        <span
          className="text-primary cursor-pointer underline"
          onClick={() => updateRecoveryModal("gallery")}
        >
          Let us help
        </span>
      </p>
      <button
        disabled={isLoading}
        type="submit"
        className="grid self-end disabled:cursor-not-allowed disabled:bg-secondary/20 place-items-center w-full sm:w-fit px-4 py-2 bg-primary hover:bg-primary/50 rounded-md text-white text-base"
      >
        {isLoading ? <ClipLoader size={20} color="#fff" /> : "Login"}
      </button>
    </div>
  );
}
