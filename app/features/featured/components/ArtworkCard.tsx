/* eslint-disable @next/next/no-img-element */
import { IoHeartOutline } from "react-icons/io5";
export default function ArtworkCard({
  image,
  artist,
  name,
  price,
}: {
  image: string;
  artist: string;
  name: string;
  price: string;
}) {
  return (
    <div className="flex flex-col gap-y-4 cursor-pointer h-[400px] justify-end mx-2">
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
        <p className="font-bold  text-dark">{price}</p>
      </div>
    </div>
  );
}

// components/ImageGallery.js
