import { updateArtworkImpressions } from "@/services/artworks/updateArtworkImpressions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "sonner";

function useLikedState(
  initialImpressions: number,
  initialLikeIds: string[],
  sessionId: string | undefined,
  art_id: string
) {
  const queryClient = useQueryClient();

  // Initialize stateful data copy of likes data
  const [likedState, setLikedState] = useState({
    count: initialImpressions,
    ids: initialLikeIds,
  });

  useEffect(() => {
    setLikedState({ count: initialImpressions, ids: initialLikeIds });
  }, [initialImpressions, initialLikeIds]);

  // Make async call to update liked state in db
  const { mutateAsync: updateLikesMutation } = useMutation({
    mutationFn: (options: { state: boolean; sessionId: string }) =>
      updateArtworkImpressions(art_id, options.state, options.sessionId),

    onSuccess: async (data) => {
      if (data?.isOk) {
        await queryClient.invalidateQueries();
        await queryClient.invalidateQueries({ queryKey: ["latest"] });
      } else {
        setLikedState({ count: initialImpressions, ids: initialLikeIds });
      }
    },
  });

  // handle onClick like button
  const handleLike = async (state: any) => {
    // Pop up login modal
    // TODO: Create login modal

    if (sessionId === undefined) {
      toast.error("You need to log in");
    } else {
      if (state) {
        setLikedState((prev) => ({
          count: prev.count + 1,
          ids: [...likedState.ids, sessionId],
        }));
      } else {
        setLikedState((prev) => ({
          count: prev.count - 1,
          ids: likedState.ids.filter((id) => id !== sessionId),
        }));
      }

      // Call useQuery mutation
      await updateLikesMutation({ state, sessionId });
    }
  };

  // Return stateful copy of like data
  return { likedState, handleLike };
}

export default useLikedState;
