"use client";
import { GrClose } from "react-icons/gr";
import RecoveryEmailInputField from "./components/RecoveryEmailInputField";
import RecoveryCodeInputField from "./components/RecoveryCodeInputField";
import { actionStore } from "@/store/actions/ActionStore";
import { AnimatePresence, motion } from "framer-motion";
import PasswordUpdate from "./components/PasswordUpdate";
import { useState } from "react";
export default function Recovery() {
  const [recoveryModal, updateRecoveryModal] = actionStore((state) => [
    state.recoveryModal,
    state.updateRecoveryModal,
  ]);

  const [showPasswordState, setShowPasswordState] = useState(true);
  return (
    <AnimatePresence>
      <motion.div
        className={` ${
          recoveryModal.value ? "fixed" : "hidden"
        } fixed inset-0 grid place-items-center p-2 z-50 bg-black/90`}
      >
        <div className="flex flex-col gap-8 items-center">
          <div className="bg-white w-fit flex flex-col gap-y-8 p-[2rem] rounded-xl relative">
            <div className="absolute top-5 right-5">
              <GrClose
                className="cursor-pointer"
                onClick={() => {
                  setShowPasswordState(false);
                  updateRecoveryModal("");
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
              <RecoveryCodeInputField />
            </div>

            {recoveryModal.value && showPasswordState && (
              <AnimatePresence>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.33, ease: "easeInOut" }}
                >
                  <PasswordUpdate />
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
