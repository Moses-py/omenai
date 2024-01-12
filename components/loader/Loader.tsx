"use client";
import { Variants, motion } from "framer-motion";

const Loader = () => {
  return <BarLoader />;
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

const BarLoader = () => {
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
        className="h-8 w-2 bg-white group-hover:bg-dark"
      />
      <motion.div
        variants={variants}
        className="h-8 w-2 bg-white group-hover:bg-dark"
      />
      <motion.div
        variants={variants}
        className="h-8 w-2 bg-white group-hover:bg-dark"
      />
      <motion.div
        variants={variants}
        className="h-8 w-2 bg-white group-hover:bg-dark"
      />
      <motion.div
        variants={variants}
        className="h-8 w-2 bg-white group-hover:bg-dark"
      />
    </motion.div>
  );
};

export default Loader;
