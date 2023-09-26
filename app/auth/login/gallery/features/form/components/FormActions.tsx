"use client";
import { actionStore } from "@/store/actions/ActionStore";
import React from "react";

export default function FormActions() {
  const [updateRecoveryModal] = actionStore((state) => [
    state.updateRecoveryModal,
  ]);
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
        className="rounded-full self-end w-fit px-[1.5rem] py-[0.4rem] bg-primary text-white hover:bg-secondary transition-all ease-linear duration-200"
        type={"submit"}
      >
        Login
      </button>
    </div>
  );
}
