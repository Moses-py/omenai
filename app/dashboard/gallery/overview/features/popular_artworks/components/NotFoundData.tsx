"use client";
import Lottie from "lottie-react";
import animationData from "../../../../../../../json/not-found.json";
export default function NotFoundData() {
  return (
    <div className="flex flex-col items-center gap-1">
      <Lottie
        animationData={animationData}
        className="w-[150px] h-[150px] text-primary"
      />
      <p className="text-base-theme font-light">No records at the moment</p>
    </div>
  );
}
