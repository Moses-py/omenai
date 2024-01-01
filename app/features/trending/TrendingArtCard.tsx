/* eslint-disable @next/next/no-img-element */
import { IoHeartOutline } from "react-icons/io5";
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
  return (
    <div className="flex flex-col gap-y-4 cursor-pointer w-full h-[500px] justify-end px-2">
      <img
        src={image}
        alt={image}
        className="w-auto max-w-[250px] max-h-[500px] h-auto aspect-auto object-top object-contain"
      />

      <div className="mb-[3rem]">
        <div className="flex justify-between items-center">
          <p className="font-medium text-dark text-[18px]">
            {artist.substring(0, 20)}
            {artist.length > 20 && "..."}
          </p>
          <span className="flex space-x-1 items-center">
            <span className="text-xs text-dark">{impressions}</span>
            <IoHeartOutline className="text-[24px] text-dark cursor-pointer" />
          </span>
        </div>
        <p className="font-normal text-base-theme italic">
          {name.substring(0, 20)}
          {name.length > 20 && "..."}
        </p>
      </div>
    </div>
  );
}

// components/ImageGallery.js
