"use client";
/* eslint-disable @next/next/no-img-element */
import { FaHeart } from "react-icons/fa";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";
import { updateArtworkImpressions } from "@/services/artworks/updateArtworkImpressions";
import { toast } from "sonner";
import { useState } from "react";
import { useUpdateEffect } from "usehooks-ts";
type ArtworkImageProps = {
  url: string;
  title: string;
  author: string;
  art_id: string;
};

export const ArtworkImage = ({
  url,
  title,
  author,
  art_id,
}: ArtworkImageProps) => {
  const [clicked, setClick] = useState({
    liked: false,
  });

  useUpdateEffect(() => {
    if (clicked.liked) {
      toast.success("Clicked");
      const addLike = async () => {
        const likedArtwork = await updateArtworkImpressions(art_id);
        if (likedArtwork?.isOk) toast.success(likedArtwork.body.message);
      };
      addLike();
    }
  }, [clicked]);

  async function handleLikeClick() {
    setClick((prev) => {
      return {
        liked: !prev.liked,
      };
    });
  }
  return (
    <div className="relative flex items-end max-w-[400px] w-auto rounded-md mb-4">
      <FaHeart
        className={`absolute top-5 right-5 z-30 text-sm ${
          clicked.liked ? "text-red-600" : "text-white"
        } cursor-pointer`}
        onClick={handleLikeClick}
      />
      <InnerImageZoom
        src={url}
        fullscreenOnMobile={false}
        hasSpacer={true}
        zoomType="hover"
        hideHint
        className="rounded-md"
      />
      <div className="absolute bottom-0 text-white px-3 py-2 z-20 bg-dark/50 w-full rounded-md cursor-pointer">
        <p className="font-bold text-[1.1rem]">{title}</p>
        <p className="text-xs text-[#fafafa]">{author}</p>
      </div>
    </div>
  );
};
