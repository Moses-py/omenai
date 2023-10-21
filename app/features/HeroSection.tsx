"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Fade, type SlideshowRef } from "react-slideshow-image";

export const HeroSection = () => {
  const ref = useRef<SlideshowRef>(null);
  return (
    <div className="relative h-[500px] lg:h-full lg:max-h-screen 2xl:max-h-[700px]">
      <div className="relative h-full">
        <Fade ref={ref} autoplay={false} arrows={false}>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="hero image"
              width={500}
              height={500}
              className="object-cover w-full h-[500px] lg:h-full overflow-hidden lg:max-h-screen 2xl:max-h-[700px]"
            />
          ))}
        </Fade>
      </div>

      <div className="w-10/12 h-[80%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[rgba(0,0,0,0.08)] rounded-2xl z-10 flex flex-col">
        <p className="text-white ml-auto pt-4 text-base px-10">
          Gallery-club of African <br /> Contemporary artworks
        </p>

        <div className="">
          <p className="font-semibold text-[120px] text-white -ml-20 ">
            OMENAI{" "}
          </p>
          <p className="text-white text-[90px] font-light -mt-14 ml-10">
            Gallery & art club
          </p>
          <div className="">
            <p className="ml-20 text-end float-left text-white text-base font-light">
              For more than 10 years, we have been <br /> helping people
              navigate the diversity of <br /> contemporary art.
            </p>
          </div>
        </div>

        <button className="bg-[#391035] px-5 py-2 text-base text-white border-0 outline-none rounded-md w-fit mt-auto ml-10 -mb-5">
          View artworks
        </button>
      </div>

      <div className="flex items-center gap-5 absolute bottom-2 right-[10%] z-10">
        <button
          onClick={() => (images.length > 1 ? ref.current?.goBack() : {})}
          className="text-white "
        >
          <BsArrowLeft className="h-10 w-10" />
        </button>
        <button
          onClick={() => (images.length > 1 ? ref.current?.goNext() : {})}
          className="text-white "
        >
          <BsArrowRight className="h-10 w-10" />
        </button>
      </div>
    </div>
  );
};

const images = ["/images/e96e5841821e79f985088d21e301bed7.jpeg"];
