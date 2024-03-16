"use client";
import Loader from "@/components/loader/Loader";
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import { useRouter, useSearchParams } from "next/navigation";
import animationData from "../../../json/order-received.json";
import { toast } from "sonner";

export default function VerifyTransactionWrapper() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const transaction_id = searchParams.get("transaction_id");

  const { data: verify_data, isLoading } = useQuery({
    queryKey: ["verify_transaction"],
    queryFn: async () => {
      const response = await fetch("/api/transactions/verify_FLW_transaction", {
        method: "POST",
        body: JSON.stringify({ transaction_id }),
      });

      const result = await response.json();
      setTimeout(() => {
        router.push("/dashboard/gallery/subscription");
      }, 5000);

      return { message: result.message, isOk: response.ok };
    },
  });
  if (isLoading) {
    return (
      <div className="w-full h-[80vh] grid place-items-center">
        <div className="flex flex-col gap-y-1 justify-center items-center">
          <p>Verifying transaction status</p>
          <Loader theme="dark" />
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

      <p>Redirecting you in a moment...please wait!!</p>
    </div>
  );
}
