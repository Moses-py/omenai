"use client";
/* eslint-disable @next/next/no-img-element */
import { IoHeartOutline } from "react-icons/io5";
import { formatPrice } from "@/utils/priceFormatter";
import useLikedState from "@/custom/hooks/useLikedState";
import { IoIosHeart } from "react-icons/io";
import Link from "next/link";
import LikeComponent from "../likes/LikeComponent";

export default function ArtworkCard({
  image,
  artist,
  name,
  pricing,
  impressions,
  likeIds,
  sessionId,
  art_id,
}: {
  image: string;
  artist: string;
  name: string;
  impressions: number;
  likeIds: string[];
  sessionId: string | undefined;
  art_id: string;
  pricing?: {
    price: string;
    shouldShowPrice: "Yes" | "No" | string;
  };
}) {
  return (
    <div>
      <div className="flex flex-col gap-y-4 w-auto h-[500px] justify-end px-1">
        <Link href={`/artwork/${name}`}>
          <img
            src={image}
            alt={image}
            className="w-auto max-w-[200px] max-h-[500px] h-auto aspect-auto object-top object-contain cursor-pointer"
          />
        </Link>

        <div className="mb-[3rem]">
          <div className="flex justify-between items-center">
            <p className="font-medium text-dark text-[16px]">
              {artist.substring(0, 20)}
              {artist.length > 20 && "..."}
            </p>
            <LikeComponent
              impressions={impressions}
              likeIds={likeIds}
              sessionId={sessionId}
              art_id={art_id}
            />
          </div>
          <p className="font-normal text-base-theme italic">
            {name.substring(0, 20)}
            {name.length > 20 && "..."}
          </p>
          {pricing?.price && pricing.shouldShowPrice === "Yes" ? (
            <p className="font-bold  text-dark">{formatPrice(pricing.price)}</p>
          ) : (
            <p className="underline font-medium">Price on request</p>
          )}
        </div>
      </div>
    </div>
  );
}

// components/ImageGallery.js
