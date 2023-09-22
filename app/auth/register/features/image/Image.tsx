import Image from "next/image";
import React from "react";

export default function ImageBlock() {
  return (
    <aside className="h-full w-full relative flex-1 hidden md:block">
      <Image
        src={"/signup_gallery_2.jpg"}
        alt=""
        width={500}
        height={500}
        className="absolute inset-0 w-full h-full object-center object-cover"
      />
    </aside>
  );
}
