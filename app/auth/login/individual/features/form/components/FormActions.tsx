"use client";
import LoaderAnimation from "@/components/loader/LoaderAnimation";
import { actionStore } from "@/store/actions/ActionStore";
import { individualLoginStore } from "@/store/auth/login/IndividualLoginStore";

export default function FormActions() {
  const [updateRecoveryModal] = actionStore((state) => [
    state.updateRecoveryModal,
  ]);

  const [isLoading] = individualLoginStore((state) => [state.isLoading]);

  return (
    <div className="flex flex-col mt-[1rem] gap-4 self-end">
      <p className="font-normal text-base">
        Forgot password?{" "}
        <span
          className="text-primary cursor-pointer underline"
          onClick={() => updateRecoveryModal("individual")}
        >
          Let us help
        </span>
      </p>
      <button
        disabled={isLoading}
        type="submit"
        className="grid self-end disabled:cursor-not-allowed disabled:bg-gray-400 place-items-center w-full sm:w-fit px-4 py-2 bg-dark hover:bg-dark/50 duration-300 text-white text-base"
      >
        {isLoading ? <LoaderAnimation theme="dark" /> : "Login"}
      </button>
    </div>
  );
}
