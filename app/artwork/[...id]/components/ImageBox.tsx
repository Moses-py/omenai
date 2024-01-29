"use client";
import { getImageFileView } from "@/lib/storage/getImageFileView";
import Image from "next/image";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";

type ImageBoxProps = {
  url: string;
};
export default function ImageBox({ url }: ImageBoxProps) {
  const image_href = getImageFileView(url, 800);

  return (
    <div className="h-full w-full md:w-auto max-w-[800px]">
      <InnerImageZoom
        src={image_href}
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
