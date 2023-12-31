import { fetchAllArtworkImpressions } from "@/services/artworks/fetchArtworkImpressions";
import TrendingArtworkCard from "./TrendingArtCard";

export default async function TrendingArtworks() {
  const artworks = await fetchAllArtworkImpressions();
  return (
    <div className=" mt-8 p-4 relative mb-[4rem]">
      <h1 className="text-dark font-normal text-[20px] sm:text-md mb-8">
        Trending Artworks on Omenai
      </h1>
      <div className=" flex relative overflow-x-scroll w-full space-x-2 ">
        {artworks.data.map((artwork: any, index: number) => {
          return (
            <TrendingArtworkCard
              key={index}
              name={artwork.title}
              image={artwork.url}
              artist={artwork.artist}
              impressions={artwork.impressions}
            />
          );
        })}
      </div>
    </div>
  );
}
