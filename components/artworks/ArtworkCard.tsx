/* eslint-disable @next/next/no-img-element */
import { IoHeartOutline } from "react-icons/io5";
import Link from "next/link";
import { formatPrice } from "@/utils/priceFormatter";
export default function ArtworkCard({
  image,
  artist,
  name,
  pricing,
}: {
  image: string;
  artist: string;
  name: string;
  pricing?: {
    price: string;
    shouldShowPrice: "Yes" | "No" | string;
  };
}) {
  return (
    <Link href={`/artwork/${name}`}>
      <div className="flex flex-col gap-y-4 cursor-pointer w-auto h-[500px] justify-end px-2">
        <img
          src={image}
          alt={image}
          className="w-auto max-w-[200px] max-h-[500px] h-auto aspect-auto object-top object-contain"
        />

        <div className="mb-[3rem]">
          <div className="flex justify-between items-center">
            <p className="font-medium text-dark text-[16px]">
              {artist.substring(0, 20)}
              {artist.length > 20 && "..."}
            </p>
            <IoHeartOutline className="text-[24px] text-dark cursor-pointer" />
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
    </Link>
  );
}

// components/ImageGallery.js
