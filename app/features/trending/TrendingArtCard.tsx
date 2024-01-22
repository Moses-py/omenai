"use client";
/* eslint-disable @next/next/no-img-element */
import { IoHeartOutline } from "react-icons/io5";
import { IoIosHeart } from "react-icons/io";

import useLikedState from "@/custom/hooks/useLikedState";
import LikeComponent from "@/components/likes/LikeComponent";
import Link from "next/link";
export default function TrendingArtworkCard({
  image,
  artist,
  name,
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
}) {
  return (
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
          <p className="font-medium text-dark text-[18px]">
            {artist.substring(0, 20)}
            {artist.length > 20 && "..."}
          </p>
        </div>
        <p className="font-normal text-base-theme italic">
          {name.substring(0, 20)}
          {name.length > 20 && "..."}
        </p>
        <span className="text-xs text-dark">{impressions} like(s)</span>
      </div>
    </div>
  );
}
