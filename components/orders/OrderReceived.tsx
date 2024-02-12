"use client";
import Lottie from "lottie-react";
import animationData from "../../json/order-received.json";
import Link from "next/link";
import { actionStore } from "@/store/actions/ActionStore";
export default function OrderReceived() {
  const [toggleOrderReceivedModal] = actionStore((state) => [
    state.toggleOrderReceivedModal,
  ]);
  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <Lottie animationData={animationData} className="w-[200px] h-[200px]" />
      <p className="text-dark text-[18px] font-medium ">
        Your order has been successfully received, we&apos;ll be in touch within
        the next 48 hours with an accurate shipping quote and next steps.
      </p>
      <p className="text-dark text-[18px] font-medium">
        Thank you for your patience
      </p>

      <Link
        onClick={() => toggleOrderReceivedModal(false)}
        href={"/"}
        className="bg-dark text-white px-8 rounded-lg py-3 my-5"
      >
        Continue shopping
      </Link>
    </div>
  );
}
