"use client";
import ArtworkCard from "../../../components/artworks/ArtworkCard";
import Loader from "@/components/loader/Loader";
import { fetchAllArtworks } from "@/services/artworks/fetchAllArtworks";
import { useQuery } from "@tanstack/react-query";

export default function LatestArtworks({
  sessionId,
}: {
  sessionId: string | undefined;
}) {
  const { data: artworks, isLoading } = useQuery({
    queryKey: ["latest"],
    queryFn: async () => {
      const data = await fetchAllArtworks();
      return data.data;
    },
  });

  if (isLoading)
    return (
      <div className="h-[40vh] w-full place-items-center grid">
        <Loader theme={"dark"} />
      </div>
    );
  return (
    <>
      {artworks.length > 0 && (
        <div className=" mt-8 p-4 relative mb-[4rem]">
          <h1 className="text-dark font-normal text-[20px] sm:text-md mb-8">
            Latest Artworks
          </h1>
          <div className="flex relative overflow-x-scroll w-full">
            {artworks.map((artwork: any, index: number) => {
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
