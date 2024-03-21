"use client";
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import { useSearchParams } from "next/navigation";
import animationData from "../../../json/order-received.json";
import { toast } from "sonner";
import { signOut } from "next-auth/react";
import { useLocalStorage } from "usehooks-ts";
import { getApiUrl } from "@/config";
import LoaderAnimation from "@/components/loader/LoaderAnimation";

export default function VerifyTransactionWrapper() {
  const searchParams = useSearchParams();
  const transaction_id = searchParams.get("transaction_id");
  const [redirect_uri, set_redirect_uri] = useLocalStorage(
    "redirect_uri_on_login",
    ""
  );
  const url = getApiUrl();

  const { data: verify_data, isLoading } = useQuery({
    queryKey: ["verify_transaction"],
    queryFn: async () => {
      const response = await fetch("/api/transactions/verify_FLW_transaction", {
        method: "POST",
        body: JSON.stringify({ transaction_id }),
      });

      const result = await response.json();
      set_redirect_uri(`${url}/dashboard/gallery/subscription`);
      setTimeout(() => {
        toast.success("Please log back in");
        signOut({ callbackUrl: "/auth/login/gallery" });
      }, 3000);

      return { message: result.message, isOk: response.ok };
    },
  });
  if (isLoading) {
    return (
      <div className="w-full h-[80vh] grid place-items-center">
        <div className="flex flex-col gap-y-1 justify-center items-center">
          <p>Verifying transaction status</p>
          <LoaderAnimation theme="dark" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[80vh] grid place-items-center">
      {verify_data?.isOk && verify_data.message === "Transaction successful" ? (
        <div className="px-8 py-16 rounded-2xl border border-dark/20">
          <div className="flex flex-col items-center gap-1 text-center">
            <h1>{verify_data?.message}</h1>
            <Lottie
              animationData={animationData}
              className="w-[200px] h-[200px]"
            />
            <p className="text-dark">
              Your transaction has been successfully confirmed.
            </p>
            <p className="text-dark">Thank you!</p>
          </div>
        </div>
      ) : (
        <div className="p-5 rounded-md border border-dark/20">
          <h1>{verify_data?.message}</h1>
        </div>
      )}

      <p>
        You&apos;ll be required to log back in, redirecting you in a
        moment...please wait!!
      </p>
    </div>
  );
}
