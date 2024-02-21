"use client";
import Lottie from "lottie-react";
import animationData from "../../json/loader.json";
export default function Loader({ theme }: { theme?: string }) {
  return (
    <div className=" h-2">
      <Lottie animationData={animationData} className="w-[250px] text-dark" />
    </div>
  );
}
