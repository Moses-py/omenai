import PopulartArtworkCard from "./components/PopulartArtworkCard";
import { fetchPopularArtworks } from "@/services/artworks/fetchPopularArtworks";
import Loader from "./Loader";

export default async function PopularArtworks() {
  const popularArtworks = await fetchPopularArtworks();

  async function wait(ms: number | undefined) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <div className="flex flex-col gap-3 w-full" id="tour-search">
      {popularArtworks.data.map((artwork: any, index: number) => {
        return (
          <PopulartArtworkCard
            key={index}
            url={"/images/2.jpeg"}
            title={artwork.title}
            artist={artwork.artist}
            impression_count={artwork.impressions}
          />
        );
      })}
    </div>
  );
}
