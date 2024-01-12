"use client";
import { useSession } from "next-auth/react";
import { useOptimistic } from "react";
import { IoHeartOutline } from "react-icons/io5";

export default function ArtworkLike({
  art_id,
  like_IDs,
}: {
  art_id: string;
  like_IDs: string[];
}) {
  // const session = useSession();
  // const id = session.data?.user.id;
  // console.log(id);
  // const isLiked = false;

  // const [optimisticLikes, addOptimisticLikes] = useOptimistic(
  //   isLiked,
  //   (_state, val: boolean) => !val
  // );

  return <IoHeartOutline className="text-[24px] text-dark cursor-pointer" />;
}
