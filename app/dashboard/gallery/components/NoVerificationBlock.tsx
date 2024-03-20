"use client";
import { BsShieldLock } from "react-icons/bs";
export default function NoVerificationBlock() {
  return (
    <div
      className={`grid place-items-center w-full h-[85vh] bg-dark rounded-lg`}
    >
      <div className="flex flex-col gap-4 items-center">
        <BsShieldLock className="text-2xl text-white" />
        <div className="text-center">
          <p className=" text-white">
            Your account is being verified, an agent will reach out to you
            within 24 hours.
          </p>
          <p className=" text-white">
            To expedite this process, please click the{" "}
            <b>&apos; Request gallery verification &apos;</b> button below{" "}
          </p>
        </div>
        <div className="">
          <button className="px-3 py-2 bg-white text-dark rounded-lg ">
            Request gallery verification
          </button>
        </div>
      </div>
    </div>
  );
}
