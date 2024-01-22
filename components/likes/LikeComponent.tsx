"use client";
import useLikedState from "@/custom/hooks/useLikedState";
import { IoIosHeart } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";

export default function LikeComponent({
  sessionId,
  impressions,
  likeIds,
  art_id,
}: {
  impressions: number;
  likeIds: string[];
  sessionId: string | undefined;
  art_id: string;
}) {
  const { likedState, handleLike } = useLikedState(
    impressions,
    likeIds,
    sessionId,
    art_id
  );
  return (
    <span className="flex space-x-1 items-center">
      <span className="text-xs text-dark">{likedState.count}</span>
      {(sessionId === undefined ||
        (sessionId && !likedState.ids.includes(sessionId))) && (
        <IoHeartOutline
          className={`text-[24px]  cursor-pointer `}
          onClick={() => handleLike(true)}
        />
      )}
      {sessionId !== undefined && likedState.ids.includes(sessionId) && (
        <IoIosHeart
          className={`text-[24px] text-red-600 cursor-pointer `}
          onClick={() => handleLike(false)}
        />
      )}
    </span>
  );
}
