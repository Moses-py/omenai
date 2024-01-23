import { updateArtworkImpressions } from "@/services/artworks/updateArtworkImpressions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
function useLikedState(
  initialImpressions: number,
  initialLikeIds: string[],
  sessionId: string | undefined,
  art_id: string
) {
  const queryClient = useQueryClient();

  // Initialize stateful data
  const [likedState, setLikedState] = useState({
    count: initialImpressions,
    ids: initialLikeIds,
  });

  const { mutateAsync: updateLikesMutation } = useMutation({
    mutationFn: (options: { state: boolean; sessionId: string }) =>
      updateArtworkImpressions(art_id, options.state, options.sessionId),
    onSuccess: (data) => {
      if (data?.isOk) {
        queryClient.invalidateQueries({ queryKey: ["trending"] });
        queryClient.invalidateQueries({ queryKey: ["latest"] });
      } else {
        setLikedState({ count: initialImpressions, ids: initialLikeIds });
      }
    },
    onError: () => {
      setLikedState({ count: initialImpressions, ids: initialLikeIds });
    },
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
      updateLikesMutation({ state, sessionId });
    }
  };

  return { likedState, handleLike };
}

export default useLikedState;
