"use client";
import Link from "next/link";
import { GoPlus } from "react-icons/go";
export default function NoSubscriptionTheme() {
  return (
    <div className=" w-full h-[80vh] grid place-items-center">
      <div className="flex justify-center items-center flex-col gap-3">
        <h5>No subscriptions plans are active</h5>
        <Link href={"/gallery/pricing"} className="">
          <button className="px-4 py-2 rounded-md w-fit bg-dark flex gap-2 items-center">
            <span className="text-white">Activate subscription</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
