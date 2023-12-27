"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { squareData } from "./squares";
import Marquee from "react-fast-marquee";

const ShuffleHero = () => {
  return (
    <>
      <section className="w-full px-8 grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-12 gap-8 h-screen lg:h-[60vh]">
        <div className="lg:col-span-4 h-full flex flex-col justify-center">
          <div className="text-center items-center justify-center gap-y-4 mt-10 md:mt-5">
            <h1 className="text-sm md:text-md uppercase font-medium">
              Shop your
            </h1>
            <p className="text-lg md:text-xl font-semibold leading-tight drop-shadow-2xl">
              Favorite artworks and collections
            </p>

            <div className="px-4 md:px-8 my-4 flex-flex-col gap-8 text-[18px]">
              <Marquee
                direction="left"
                autoFill
                speed={50}
                className="flex flex-row gap-8 my-2"
              >
                <p className="mx-4">Photography</p>
                <p className="mx-4">Painting</p>
                <p className="mx-4">Wall arts</p>
                <p className="mx-4">Surealism</p>
                <p className="mx-4">Classicsism</p>
                <p className="mx-4">Contemporary</p>
              </Marquee>
              <Marquee
                direction="right"
                autoFill
                speed={50}
                className="flex flex-row gap-8 my-2"
              >
                <p className="mx-4">Art prints</p>
                <p className="mx-4">Tarpestries</p>
                <p className="mx-4">Sculptures</p>
                <p className="mx-4">Posters</p>
                <p className="mx-4">Gallery</p>
                <p className="mx-4">Live arts</p>
              </Marquee>
            </div>
            <button className="bg-dark border-2 my-5 text-white font-medium py-2 px-4 rounded transition-all w-fit uppercase hover:border-dark hover:text-dark duration-150 active:scale-95">
              Shop now
            </button>
          </div>
        </div>
        <div className="w-full lg:col-span-8">
          <ShuffleGrid />
        </div>
      </section>
      <hr className="border-dark/30" />
    </>
  );
};

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-2 grid-rows-2  md:grid-rows-3 md:grid-cols-3 lg-grid-rows-4 lg:grid-cols-4 h-full gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
