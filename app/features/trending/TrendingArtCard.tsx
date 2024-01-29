"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { getImageFileView } from "@/lib/storage/getImageFileView";
export default function TrendingArtworkCard({
  image,
  artist,
  name,
  impressions,
}: {
  image: string;
  artist: string;
  name: string;
  impressions: number;
}) {
  const image_href = getImageFileView(image, 300);

  return (
    <div className="flex flex-col gap-y-4 w-auto h-[500px] justify-end px-1">
      <Link href={`/artwork/${name}`}>
        <img
          src={image_href}
          alt={name + " image"}
          className="w-auto max-w-[250px] max-h-[500px] h-auto aspect-auto object-top object-contain cursor-pointer"
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
