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
    <div>
      <div className="flex flex-col gap-y-4 w-auto h-full max-h-[4200px] justify-end px-1">
        <Link href={`/artwork/${name}`}>
          <img
            src={image_href}
            alt={name + " image"}
            className="w-auto max-w-[180px] max-h-[420px] h-auto aspect-auto object-top object-contain cursor-pointer"
          />
        </Link>

        <div className="mb-[3rem]">
          <div className="flex justify-between items-center">
            <p className="font-medium text-dark text-xs">
              {artist.substring(0, 20)}
              {artist.length > 20 && "..."}
            </p>
          </div>
          <p className="font-semibold text-dark italic">
            {name.substring(0, 20)}
            {name.length > 20 && "..."}
          </p>
          <span className="text-xs text-dark">{impressions} like(s)</span>
        </div>
      </div>
    </div>
  );
}
