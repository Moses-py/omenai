/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";
import { Slide, type SlideshowRef } from "react-slideshow-image";
type Props = {
  title: string;
  items: {
    image: string;
    name: string;
    gallery: string;
    price: number | null;
    date: string;
  }[];
};
export const ProductsSlide = (props: Props) => {
  const { title, items } = props;
  const ref = useRef<SlideshowRef>(null);
  const [active, setActive] = useState(0);

  return (
    <div className="my-16 px-5 lg:px-10">
      <p className="text-xl font-light text-black">{title}</p>

      <Slide
        ref={ref}
        cssClass="my-5"
        slidesToShow={4.5}
        arrows={false}
        infinite={false}
        defaultIndex={0}
        canSwipe={false}
        autoplay={false}
        onChange={(from, to) => setActive(to)}
        slidesToScroll={4}
      >
        {items.map(({ image, name, date, gallery, price }, index) => (
          <div key={index} className="mr-5">
            <div className="h-[300px]">
              <img src={image} alt="" className="h-full w-full object-cover" />
            </div>

            <p className="pt-2 underline text-black font-light text-sm">
              {name}
            </p>

            <p className="text-[#9D9D9D] font-normal text-base italic">
              {date}
            </p>
            <p className="text-[#818181] font-normal text-base">{gallery}</p>

            <div className="flex items-center justify-between">
              {price ? (
                <p className="text-[#696969] font-medium text-base">${price}</p>
              ) : (
                <p className="text-[#696969] font-medium text-base underline">
                  Price on request
                </p>
              )}

              <IoHeartOutline className="h-6 w-6" />
            </div>
          </div>
        ))}
      </Slide>

      <ProgressBar value={((active + 1) / items.length) * 100} />

      <div className="float-right flex gap-5 items-center">
        <button
          onClick={() => (items.length > 1 ? ref.current?.goBack() : {})}
          className="text-black"
        >
          <BsArrowLeft className="h-10 w-10" />
        </button>
        <button
          onClick={() => (items.length > 1 ? ref.current?.goNext() : {})}
          className="text-black"
        >
          <BsArrowRight className="h-10 w-10" />
        </button>
      </div>
    </div>
  );
};

const ProgressBar = ({ value }: { value: number }) => {
  return (
    <div className="h-[6px] w-full border border-black rounded-full my-5 overflow-hidden">
      <div
        className="h-full bg-black"
        style={{
          width: value + "%",
        }}
      ></div>
    </div>
  );
};
