import { updateArtworkImpressions } from "@/services/artworks/updateArtworkImpressions";
import { useState } from "react";
import { toast } from "sonner";
function useLikedState(
  initialImpressions: number,
  initialLikeIds: string[],
  sessionId: string | undefined,
  art_id: string
) {
  const [likedState, setLikedState] = useState({
    count: initialImpressions,
    ids: initialLikeIds,
  });

  const handleLike = async (state: any) => {
    // Pop up login modal
    // TODO: Create login modal

    if (sessionId === undefined) {
      toast.error("You need to log in");
    } else {
      if (state) {
        const pushedId = [...likedState.ids, sessionId];
        setLikedState((prev) => ({
          count: prev.count + 1,
          ids: pushedId,
        }));
      } else {
        const pulledId = likedState.ids.filter((id) => id !== sessionId);
        setLikedState((prev) => ({
          count: prev.count - 1,
          ids: pulledId,
        }));
      }

      // Send async request
      try {
        const updateLikeInDB = await updateArtworkImpressions(
          art_id,
          state,
          sessionId
        );

        if (updateLikeInDB === undefined || !updateLikeInDB.isOk) {
          setLikedState({ count: initialImpressions, ids: initialLikeIds });
        }
      } catch (error) {
        // Error has occured with DB update
        setLikedState({ count: initialImpressions, ids: initialLikeIds });
      }
    }
  };

  return { likedState, handleLike };
}

export default useLikedState;
