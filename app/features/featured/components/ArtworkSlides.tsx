"use client";
import ArtworkCard from "./ArtworkCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="grid place-items-center p-2 md:p-3 rounded-full ring-1 ring-base-theme mx-16 absolute z-10 bottom-[-5rem] right-0"
      onClick={onClick}
    >
      <IoIosArrowForward className="text-sm" />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="grid place-items-center p-2 md:p-3 rounded-full ring-1 ring-base-theme mx-16 absolute z-10 bottom-[-5rem] left-0"
      onClick={onClick}
    >
      <IoIosArrowBack className="text-sm" />
    </div>
  );
}
export default function ArtworkSlides({ artworks }: { artworks: any }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "30px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1580,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      //   {
      //     breakpoint: 380,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //     },
      //   },
    ],
  };
  return (
    // <div className="flex items-end overflow-x-scroll gap-x-5 my-4 custom-scrollbar">
    <Slider {...settings}>
      {artworks.data.map((artwork: any, index: number) => {
        return (
          <ArtworkCard
            image={artwork.url}
            key={index}
            artist={artwork.artist}
            name={artwork.title}
            price={artwork.pricing.price}
          />
        );
      })}
    </Slider>

    // </div>
  );
}
