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
      className="grid place-items-center p-2 md:p-3 rounded-full ring-1 cursor-pointer ring-base-theme mx-16 absolute z-10 bottom-[-4rem] right-[-4rem]"
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
      className="grid place-items-center p-2 md:p-3 rounded-full ring-1 cursor-pointer ring-base-theme mx-16 absolute z-10 bottom-[-4rem] left-[-4rem]"
      onClick={onClick}
    >
      <IoIosArrowBack className="text-sm" />
    </div>
  );
}
export default function ArtworkSlides({ artworks }: { artworks: any[] }) {
  var settings = {
    adaptiveHeight: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
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
    <Slider {...settings}>
      {artworks.map((artwork: any, index: number) => {
        return (
          <ArtworkCard
            image={artwork.url}
            key={index}
            artist={artwork.artist}
            name={artwork.title}
            pricing={artwork.pricing}
          />
        );
      })}
    </Slider>
  );
}
