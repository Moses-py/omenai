"use client";
import Image from "next/image";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";

type ImageBoxProps = {
  url: string;
  title: string;
};
export default function ImageBox({ url, title }: ImageBoxProps) {
  return (
    <div className="h-full w-full md:w-auto max-w-[600px]">
      <InnerImageZoom
        src={url}
        fullscreenOnMobile={false}
        hasSpacer={true}
        zoomType="hover"
      />
      {/* <Image
        src={url}
        alt={`${title} image`}
        width={500}
        height={750}
        className="w-full h-full"
      /> */}
    </div>
  );
}
