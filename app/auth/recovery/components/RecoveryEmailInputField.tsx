"use client";
import { verifyEmailAccount } from "@/services/password/verifyEmailAccount";
import { actionStore } from "@/store/actions/ActionStore";
import { FormEvent, useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "sonner";

export default function RecoveryEmailInputField() {
  const [isLoading, setIsloading] = useState(false);
  const [email, setEmail] = useState("");
  const [recoveryModal] = actionStore((state) => [state.recoveryModal]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsloading(true);

    const data = await verifyEmailAccount(recoveryModal.type, {
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
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button
        disabled={isLoading}
        type="submit"
        className="grid self-end disabled:cursor-not-allowed disabled:bg-secondary/20 place-items-center w-full sm:w-fit px-4 py-2 bg-primary hover:bg-primary/50 rounded-md text-white text-xs"
      >
        {isLoading ? <ClipLoader size={20} color="#fff" /> : "Send link"}
      </button>
    </form>
  );
}
