"use client";

import { AnimatePresence, motion } from "framer-motion";
import Pill from "./components/Pill";
import { useIndividualAuthStore } from "@/store/auth/register/IndividualAuthStore";

let artTypes = [
  "Western",
  "Contemporary",
  "Eastern",
  "Modern",
  "Eastern",
  "Western",
  "Modern",
  "Contemporary",
  "Modern",
  "Contemporary",
  "Western",
  "Eastern",
];
function Preferences() {
  const [decrementCurrentSignupFormIndex] = useIndividualAuthStore((state) => [
    state.decrementCurrentSignupFormIndex,
  ]);
  return (
    <AnimatePresence>
      <div className="container">
        <p className="text-base font-semibold text-center mb-[3rem]">
          We would like understand your art interests, please select up to 3
          types of artworks you’re most interested in
        </p>

        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ y: -300 }}
          transition={{ duration: 0.33 }}
        >
          <div className="flex flex-wrap justify-center gap-y-[1rem] gap-x-[0.5rem]">
            {artTypes.map((art, index) => {
              return <Pill key={index} text={art} />;
            })}
          </div>
          {/* Submit */}
          <div className="flex gap-4 justify-end my-5">
            <button
              className={` rounded-full px-[2rem] py-[0.5rem] mt-[1rem] bg-secondary text-white hover:bg-secondary/30 transition-all ease-linear duration-200`}
              type={"button"}
              onClick={decrementCurrentSignupFormIndex}
            >
              Back
            </button>
            <button
              className="rounded-full px-[2rem] py-[0.5rem] mt-[1rem] bg-primary text-white hover:bg-secondary transition-all ease-linear duration-200"
              type={"submit"}
            >
              Submit
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default Preferences;
