"use client";
import { actionStore } from "@/store/actions/ActionStore";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import FilterPackets from "./FilterPackets";

const FilterModal = () => {
  const [toggleFilterModal, filterModal] = actionStore((state) => [
    state.toggleFilterModal,
    state.filterModal,
  ]);

  return (
    <AnimatePresence>
      {filterModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => toggleFilterModal(false)}
          className="bg-slate-900/20 backdrop-blur py-8 px-2 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white text-dark p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-y-scroll h-[80vh]"
          >
            <FilterPackets />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FilterModal;
