/* eslint-disable @next/next/no-img-element */
import { IoHeartOutline } from "react-icons/io5";
export default function ArtworkCard({
  image,
  artist,
  name,
  pricing,
}: {
  image: string;
  artist: string;
  name: string;
  pricing: {
    price: string;
    shouldShowPrice: "Yes" | "No";
  };
}) {
  return (
    <div className="flex flex-col gap-y-4 cursor-pointer w-full h-[400px] justify-end px-2">
      <img
        src={image}
        alt={image}
        className="w-auto max-w-[400px] h-auto aspect-auto object-top object-contain"
      />

      <div>
        <div className="flex justify-between items-center">
          <p className="font-medium text-dark text-[18px]">
            {artist.substring(0, 20)}
            {artist.length > 20 && "..."}
          </p>
          <IoHeartOutline className="text-[24px] text-dark cursor-pointer" />
        </div>
        <p className="font-normal text-base-theme italic">
          {name.substring(0, 20)}
          {name.length > 20 && "..."}
        </p>
        {pricing.shouldShowPrice === "Yes" ? (
          <p className="font-bold  text-dark">{pricing.price}</p>
        ) : (
          <p className="underline font-medium">Price on request</p>
        )}
      </div>
    </div>
  );
}

// components/ImageGallery.js
