"use client";
import { useQuery } from "@tanstack/react-query";
import TrendingArtworkCard from "./TrendingArtCard";
import { fetchAllArtworkImpressions } from "@/services/artworks/fetchArtworkImpressions";
import Loader from "@/components/loader/Loader";

export default function TrendingArtworks({
  sessionId,
}: {
  sessionId: string | undefined;
}) {
  const { data: artworks, isLoading } = useQuery({
    queryKey: ["trending"],
    queryFn: async () => {
      const data = await fetchAllArtworkImpressions();
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
            Trending Artworks on Omenai
          </h1>
          <div className=" flex relative overflow-x-scroll w-full space-x-2 ">
            {artworks.map((artwork: any, index: number) => {
              return (
                <TrendingArtworkCard
                  key={index}
                  name={artwork.title}
                  image={artwork.url}
                  artist={artwork.artist}
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
