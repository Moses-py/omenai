"use client";
import { actionStore } from "@/store/actions/ActionStore";
import Link from "next/link";
import LoaderAnimation from "../loader/LoaderAnimation";

export default function LoginModalFormActions({
  loading,
}: {
  loading: boolean;
}) {
  const [toggleLoginModal, toggleLoginModalRecoveryForm] = actionStore(
    (state) => [state.toggleLoginModal, state.toggleLoginModalRecoveryForm]
  );

  return (
    <>
      <div className="flex w-full flex-col mt-[1rem] gap-4">
        <div className="flex justify-end w-full my-3">
          <p className="font-normal text-base">
            Forgot password?{" "}
            <span
              onClick={() => toggleLoginModalRecoveryForm(true)}
              className="text-primary cursor-pointer font-bold underline"
            >
              Let us help
            </span>
          </p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className=" disabled:cursor-not-allowed grid disabled:bg-white disabled:border disabled:border-dark place-items-center w-full px-4 py-2 bg-dark hover:bg-dark/70 rounded-md text-white text-base "
        >
          {!loading ? "Login" : <LoaderAnimation theme="dark" />}
        </button>
      </div>
      <div className="w-full flex justify-center my-2">
        <p className="text-base text-dark/80 font-normal">
          Don&apos;t have an account?{" "}
          <button onClick={() => toggleLoginModal(false)}>
            <Link
              href="/auth/register/individual"
              className="text-primary underline font-bold"
            >
              Create one
            </Link>
          </button>
        </p>
      </div>
    </>
  );
}
