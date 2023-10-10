"use client";
import { GrClose } from "react-icons/gr";
import RecoveryEmailInputField from "./components/RecoveryEmailInputField";
import { actionStore } from "@/store/actions/ActionStore";
import { AnimatePresence, motion } from "framer-motion";
export default function Recovery() {
  const [recoveryModal, updateRecoveryModal] = actionStore((state) => [
    state.recoveryModal,
    state.updateRecoveryModal,
  ]);

  return (
    <AnimatePresence>
      <motion.div
        className={` ${
          recoveryModal.value ? "fixed" : "hidden"
        } fixed inset-0 grid place-items-center p-2 z-50 bg-black/90`}
      >
        <div className="flex flex-col gap-8 items-center">
          <div className="bg-white max-w-[450px] flex flex-col gap-y-8 p-[2rem] rounded-xl relative">
            <div className="absolute top-5 right-5">
              <GrClose
                className="cursor-pointer"
                onClick={() => {
                  updateRecoveryModal("individual");
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
              <RecoveryEmailInputField />
            </div>
            <div>
              <p className="text-xs sm:text-base font-light sm:font-normal text-red-600">
                Kindly note that a link will be sent to your email address.
                Click the link to complete this process.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
