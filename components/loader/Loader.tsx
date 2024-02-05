"use client";
import { Variants, motion } from "framer-motion";

const Loader = ({ theme }: { theme: "dark" | "light" }) => {
  return <BarLoader theme={theme} />;
};

const variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "circIn",
    },
  },
} as Variants;

const BarLoader = ({ theme }: { theme: "light" | "dark" }) => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial="initial"
      animate="animate"
      className="flex gap-1"
    >
      <motion.div
        variants={variants}
        className={`h-5 w-1 ${
          theme === "dark"
            ? "bg-dark group-hover:bg-white"
            : "bg-white group-hover:bg-dark"
        }`}
      />
      <motion.div
        variants={variants}
        className={`h-5 w-1 ${
          theme === "dark"
            ? "bg-dark group-hover:bg-white"
            : "bg-white group-hover:bg-dark"
        }`}
      />
      <motion.div
        variants={variants}
        className={`h-5 w-1 ${
          theme === "dark"
            ? "bg-dark group-hover:bg-white"
            : "bg-white group-hover:bg-dark"
        }`}
      />
      <motion.div
        variants={variants}
        className={`h-5 w-1 ${
          theme === "dark"
            ? "bg-dark group-hover:bg-white"
            : "bg-white group-hover:bg-dark"
        }`}
      />
      <motion.div
        variants={variants}
        className={`h-5 w-1 ${
          theme === "dark"
            ? "bg-dark group-hover:bg-white"
            : "bg-white group-hover:bg-dark"
        }`}
      />
    </motion.div>
  );
};

export default Loader;
