"use client";

import { AnimatePresence, motion } from "framer-motion";
import Pill from "./components/Pill";
import { useIndividualAuthStore } from "@/store/auth/register/IndividualAuthStore";

let artTypes = [
  "Surrealism",
  "Minimalism",
  "Sculpture",
  "Painting",
  "Installation art",
  "Abstract art",
  "Perfomance art",
  "Pop art",
];
function Preferences() {
  const [decrementCurrentSignupFormIndex, preferences] = useIndividualAuthStore(
    (state) => [state.decrementCurrentSignupFormIndex, state.preferences]
  );
  return (
    <AnimatePresence>
      <div className="container">
        <p className="text-base font-semibold text-center">
          We would like understand your art interests, please select up to 3
          types of artworks you’re most interested in
        </p>
        <p className="text-center text-base font-semibol my-[1.5rem]">
          Selected: {preferences.length}/3
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
              className={` rounded-full px-[1.5rem] py-[0.4rem] mt-[1rem] bg-secondary text-white hover:bg-secondary/30 transition-all ease-linear duration-200`}
              type={"button"}
              onClick={decrementCurrentSignupFormIndex}
            >
              Back
            </button>
            <button
              className="rounded-full px-[1.5rem] py-[0.4rem] mt-[1rem] bg-primary text-white hover:bg-secondary transition-all ease-linear duration-200"
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
