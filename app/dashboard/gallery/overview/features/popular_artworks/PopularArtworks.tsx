import NotFoundData from "./components/NotFoundData";
import PopulartArtworkCard from "./components/PopulartArtworkCard";
import { fetchPopularArtworks } from "@/services/artworks/fetchPopularArtworks";

export default async function PopularArtworks() {
  const popularArtworks = await fetchPopularArtworks();

  return (
    <>
      {popularArtworks.data.length === 0 ? (
        <div className="w-full h-full grid pb-10">
          <NotFoundData />
        </div>
      ) : (
        <div className="flex flex-col gap-6 w-full" id="tour-search">
          {popularArtworks.data.map((artwork: any, index: number) => {
            return (
              <PopulartArtworkCard
                key={index}
                url={artwork.url}
                title={artwork.title}
                artist={artwork.artist}
                impression_count={artwork.impressions}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
