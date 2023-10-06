"use client";
import { validateStringCode } from "@/lib/validations/stringCodeValidator";
import { verifyEmail } from "@/services/verify/verifyEmail";
import { ChangeEvent, FormEvent, useState } from "react";
import { Toaster, toast } from "sonner";
type TokenProps = {
  token: string;
};
export default function TokenBlock({ token }: TokenProps) {
  const [tokenValue, setTokenValue] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const error: string = validateStringCode(tokenValue);

    if (error) {
      toast.error(error);
    } else {
      toast.success("Verifying token");

      const res = await verifyEmail(
        { params: token, token: tokenValue },
        "individual"
      );
      if (!res.isOk) toast.error(res.body.message);
      if (res.isOk) toast.success(res.body.message);
    }
  }
  return (
    <div className="text-center flex flex-col items-center">
      <h1 className="text-sm xs:text-md sm:text-lg md:text-xl text-center font-medium">
        Verify your email address
      </h1>

      <Toaster richColors position="top-center" />
      <form
        className="flex xs:flex-row flex-col gap-6 mt-8"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="px-4 py-2 ring-1 ring-primary rounded-md"
          placeholder="verification token"
          required
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTokenValue(e.target.value)
          }
        />
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded-md"
        >
          Verify
        </button>
      </form>
    </div>
  );
}
