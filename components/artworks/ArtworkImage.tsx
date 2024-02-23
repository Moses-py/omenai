"use client";
/* eslint-disable @next/next/no-img-element */
import { FaHeart } from "react-icons/fa";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";

import { formatPrice } from "@/utils/priceFormatter";
import Link from "next/link";
import { getImageFileView } from "@/lib/storage/getImageFileView";
import LikeComponent from "../likes/LikeComponent";
import Image from "next/image";
type ArtworkImageProps = {
  url: string;
  title: string;
  author: string;
  impressions: number;
  likeIds: string[];
  sessionId: string | undefined;
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
  impressions,
  likeIds,
  sessionId,
  art_id,
  pricing,
}: ArtworkImageProps) => {
  const image_href = getImageFileView(url, 400);

  return (
    <Link href={`/artwork/${title}`}>
      <div className="relative flex items-end max-w-[350px] w-auto rounded-md mb-4">
        {pricing?.price && (
          <div className="absolute top-5 right-5 z-10">
            <LikeComponent
              impressions={impressions}
              likeIds={likeIds}
              sessionId={sessionId}
              art_id={art_id}
            />
          </div>
        )}
        <img
          src={image_href}
          alt="artwork image"
          className="w-auto max-w-[350px] rounded-md"
        />

        <div className="absolute bottom-0 flex justify-between items-center gap-y-[0.1rem] text-white px-2 py-1 z-10 bg-dark/50 w-full rounded-md cursor-pointer">
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
        </div>
      </div>
    </Link>
  );
};
