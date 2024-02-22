"use client";
import { validateStringCode } from "@/lib/validations/stringCodeValidator";
import { resendCode } from "@/services/verify/resendVerifyCode";
import { verifyEmail } from "@/services/verify/verifyEmail";
import { verifyAuthStore } from "@/store/auth/verify/VerifyAuthStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import LoaderAnimation from "@/components/loader/LoaderAnimation";
import { Toaster, toast } from "sonner";
type TokenProps = {
  token: string;
};
export default function TokenBlock({ token }: TokenProps) {
  const [tokenValue, setTokenValue] = useState("");
  const [isLoading, setIsLoading] = verifyAuthStore((state) => [
    state.isLoading,
    state.setIsloading,
  ]);
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const error: string = validateStringCode(tokenValue);

    if (error) {
      toast.error(error);
    } else {
      toast.success("Verifying token");
      setIsLoading();

      const res = await verifyEmail(
        { params: token, token: tokenValue },
        "gallery"
      );
      if (!res.isOk) toast.error(res.body.message);
      if (res.isOk) {
        toast.success(res.body.message);
        router.push("/auth/login/gallery");
      }
      setIsLoading();
    }
  }

  const resendVerification = async () => {
    toast("A new token will soon be on it's way to you");
    const payload = { author: token };
    await resendCode("gallery", payload);
  };
  return (
    <div className="text-center flex flex-col items-center">
      <div className="info_text my-[1rem]">
        <h1 className="lg:text-2xl md:text-xl text-md">
          Verify your email to kickstart your Journey.
        </h1>
        <div className="flex flex-col gap-4 my-[2rem]">
          <p className="leading-32 text-base">
            Thank you for choosing to join{" "}
            <span className="text-dark font-bold">Omenai inc.</span> We extend
            our warmest welcome and look forward to providing you with an
            enjoyable journey with us
          </p>
          <p className="leading-32 text-base">
            A token has been sent to the email address you provided to us,
            Kindly utilize this token to authenticate your account and access
            our services.
          </p>
        </div>
      </div>

      {/* <Toaster richColors position="top-center" /> */}
      <form
        className="flex xs:flex-row flex-col gap-6 mt-8 w-full xs:justify-center mb-8"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="px-4 py-2 ring-1 ring-dark rounded-md w-full md:w-1/3"
          placeholder="Verification token"
          required
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTokenValue(e.target.value)
          }
        />
        <button
          disabled={isLoading}
          className=" disabled:bg-gray-400 grid place-items-center disabled:cursor-not-allowed px-4 py-2 bg-black text-white rounded-md transition-all ease-linear duration-200"
          type={"submit"}
        >
          {isLoading ? <LoaderAnimation theme="dark" /> : "Submit"}
        </button>
      </form>
      <p>
        Did not recieve a code?{" "}
        <span
          className="text-dark underline font-bold cursor-pointer"
          onClick={resendVerification}
        >
          Resend code
        </span>
      </p>

      <div className="contact my-[3rem] md:w-[50%] mx-auto leading-32">
        <p className="text-center">
          Feel free to contact us should you have any issues on{" "}
          <Link
            href={"mailto:moses@omenai.net"}
            className="text-dark font-bold underline"
          >
            moses@omenai.net
          </Link>
          . We are always happy to help.
        </p>
      </div>
    </div>
  );
}
