"use client";
import ArtworkCard from "@/components/artworks/ArtworkCard";
import Loader from "@/components/loader/Loader";
import { fetchCuratedArtworks } from "@/services/artworks/fetchedCuratedArtworks";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export default function CuratedArtworksLayout({
  sessionId,
}: {
  sessionId: string | undefined;
}) {
  const session = useSession();
  const { data: userCuratedArtworks, isLoading } = useQuery({
    queryKey: ["curated"],
    queryFn: async () => {
      const data = await fetchCuratedArtworks(session);
      if (data?.isOk) return data.data;
      else return [];
    },
  });

  if (isLoading)
    return (
      <div className="h-[20vh] w-full place-items-center grid">
        <Loader theme={"dark"} />
      </div>
    );

  return (
    <>
      {userCuratedArtworks !== undefined && userCuratedArtworks.length > 0 && (
        <div className=" mt-8 p-4 relative mb-[4rem]">
          <h1 className="text-dark font-normal text-[20px] sm:text-md mb-4">
            Curated picks: Just for you
          </h1>
          <div className="flex relative overflow-x-scroll w-full space-x-2">
            {userCuratedArtworks.map((artwork: any, index: number) => {
              return (
                <ArtworkCard
                  image={artwork.url}
                  key={index}
                  artist={artwork.artist}
                  name={artwork.title}
                  pricing={artwork.pricing}
                  impressions={artwork.impressions}
                  likeIds={artwork.like_IDs}
                  sessionId={sessionId}
                  art_id={artwork.art_id}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
