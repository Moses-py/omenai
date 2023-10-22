import Image from "next/image";
import React from "react";

export default function Auctions() {
  return (
    <div className="grid place-items-center py-16 px-5">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/icons/auction.png"
          alt="auction icon"
          width={100}
          height={100}
        />
        <p className="text-xl text-gray-200">Coming soon!</p>
        <p className="text-gray-200 text-center">
          We’re working hard to bring this feature to you, please stay tuned!
        </p>
      </div>
    </div>
  );
}
