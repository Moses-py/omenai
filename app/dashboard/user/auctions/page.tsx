import Image from "next/image";
import React from "react";

export default function Auctions() {
  return (
    <div className="grid place-items-center px-5 h-full">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/icons/auction.png"
          alt="auction icon"
          width={70}
          height={70}
        />
        <p className="text-lg text-base-theme">Coming soon!</p>
        <p className="text-base-theme text-center">
          We’re working hard to bring this feature to you, please stay tuned!
        </p>
      </div>
    </div>
  );
}
