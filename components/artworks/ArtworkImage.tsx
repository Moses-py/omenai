"use client";
/* eslint-disable @next/next/no-img-element */
import { FaHeart } from "react-icons/fa";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";

import { formatPrice } from "@/utils/priceFormatter";
import Link from "next/link";
type ArtworkImageProps = {
  url: string;
  title: string;
  author: string;
  art_id: string;
  pricing?: {
    price: string;
    shouldShowPrice: "Yes" | "No" | string;
  };
};

export const ArtworkImage = ({
  url,
  title,
  author,
  art_id,
  pricing,
}: ArtworkImageProps) => {
  return (
    <div className="relative flex items-end max-w-[400px] w-auto rounded-md mb-4">
      <FaHeart
        className={`absolute top-5 right-5 z-30 text-sm text-white cursor-pointer`}
      />
      <InnerImageZoom
        src={url}
        fullscreenOnMobile={false}
        hasSpacer={true}
        zoomType="hover"
        hideHint
        className="rounded-md"
      />
      <Link
        href={`/artwork/${title}`}
        className="absolute bottom-0 flex justify-between items-center gap-y-[0.1rem] text-white px-2 py-1 z-20 bg-dark/50 w-full rounded-md cursor-pointer"
      >
        <div className="flex-col flex gap-y-[0.1rem]">
          <span className="font-bold text-base">{title}</span>
          <span className="text-xs text-[#fafafa]">{author}</span>
        </div>

        {pricing?.price &&
          (pricing?.price && pricing.shouldShowPrice === "Yes" ? (
            <span className="font-bold text-xs text-white">
              {formatPrice(pricing.price)}
            </span>
          ) : (
            <span className="underline font-medium text-xs">
              Price on request
            </span>
          ))}
      </Link>
    </div>
  );
};
