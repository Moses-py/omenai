"use client";

import { verifyEmailAccount } from "@/services/password/verifyEmailAccount";
import { useState, FormEvent } from "react";
import { toast } from "sonner";
import Loader from "../loader/Loader";
import LoaderAnimation from "../loader/LoaderAnimation";

export default function RecoveryModalEmailInputField() {
  const [loading, setIsloading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsloading(true);

    const data = await verifyEmailAccount("individual", {
      email,
    });

    if (data.isOk) toast.success(data.body.message);
    else toast.error(data.body.message);
    setIsloading(false);
  };
  return (
    <form
      className="flex sm:flex-row flex-col gap-4 w-full"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="flex-1 w-full ring-1 ring-secondary/20 focus:ring-primary px-4 py-1 rounded-md placeholder:text-xs"
        placeholder="Email address"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        disabled={loading}
        className=" disabled:cursor-not-allowed grid disabled:bg-white disabled:border disabled:border-dark place-items-center w-full sm:w-fit px-4 py-2 bg-primary hover:bg-primary/50 rounded-md text-white text-base "
      >
        {!loading ? "Send reset link" : <LoaderAnimation theme="dark" />}
      </button>
    </form>
  );
}
