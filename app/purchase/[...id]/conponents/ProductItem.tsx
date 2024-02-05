"use client";

import { getImageFileView } from "@/lib/storage/getImageFileView";
import { formatPrice } from "@/utils/priceFormatter";

export default function ProductItem({
  artwork,
}: {
  artwork: ArtworkSchemaTypes & { createdAt: string; updatedAt: string };
}) {
  const image_href = getImageFileView(artwork.url, 200);
  return (
    <div className="w-full">
      <div className="border border-dark/20 p-5">
        <div className="flex flex-col gap-2">
          <img
            src={image_href}
            alt={artwork.title + " image"}
            className="w-auto max-w-[200px] max-h-[400px] h-auto aspect-auto object-top object-contain cursor-pointer"
          />
          <div className="">
            <div className="flex justify-between items-center">
              <p className="font-medium text-dark text-[18px]">
                {artwork.artist.substring(0, 20)}
                {artwork.artist.length > 20 && "..."}
              </p>
            </div>
            <p className="font-normal text-base-theme text-[20px] italic">
              {artwork.title.substring(0, 20)}
              {artwork.title.length > 20 && "..."}
            </p>
            <p className="font-bold  text-dark">
              Price: {formatPrice(artwork.pricing.price)}
            </p>
          </div>
        </div>
        <hr className="border-dark/30 my-5" />

        <div className="text-[18px]">
          <div className="flex justify-between items-center  my-3 text-dark/70">
            <p>Price</p>
            <p className="font-bold">{formatPrice(artwork.pricing.price)}</p>
          </div>
          <div className="flex justify-between items-center text-dark/70 my-3">
            <p>Shipping</p>
            <p className="font-bold">To be calculated...</p>
          </div>
          <div className="flex justify-between items-center text-dark/70 my-3">
            <p>Taxes</p>
            <p className="font-bold">To be calculated...</p>
          </div>
          <div className="flex justify-between items-center font-bold text-[20px] mt-10">
            <p>Grand total</p>
            <p>Waiting for final cost</p>
          </div>
          <p className="my-3 text-dark/70 italic">
            *Additional duties and taxes may apply at import
          </p>
        </div>
      </div>
    </div>
  );
}
