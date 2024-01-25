"use client";
import { GrClose } from "react-icons/gr";
import { actionStore } from "@/store/actions/ActionStore";
import RecoveryModalEmailInputField from "./RecoveryModalEmailInputField";

export default function RecoveryModalForm() {
  const [toggleLoginModalRecoveryForm] = actionStore((state) => [
    state.toggleLoginModalRecoveryForm,
  ]);
  return (
    <div className="w-auto h-auto">
      <div className="flex flex-col gap-8 items-center">
        <div className="bg-white flex flex-col gap-y-8 px-2 py-4 rounded-xl relative">
          <div className="absolute top-5 right-5">
            <GrClose
              className="cursor-pointer"
              onClick={() => {
                toggleLoginModalRecoveryForm(false);
              }}
            />
          </div>
          <div className="">
            <h1 className="text-md md:text-lg font-bold">Let us help</h1>
            <p className="text-xs sm:text-base font-light sm:font-normal">
              Enter your email so we can help recover your account
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <RecoveryModalEmailInputField />
          </div>
          <div>
            <p className="text-xs sm:text-base font-light sm:font-normal text-red-600">
              Kindly note that a link will be sent to your email address. Click
              the link to complete this process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
