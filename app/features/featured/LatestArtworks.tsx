import { fetchAllArtworks } from "@/services/artworks/fetchAllArtworks";
import ArtworkSlides from "../components/ArtworkSlides";
import ArtworkCard from "../components/ArtworkCard";

export default async function LatestArtworks() {
  const artworks = await fetchAllArtworks();
  return (
    <div className=" mt-8 p-4 relative mb-[4rem]">
      <h1 className="text-dark font-normal text-[20px] sm:text-md mb-8">
        Latest Artworks
      </h1>
      <div className="flex relative overflow-x-scroll w-full space-x-2">
        {artworks.data.map((artwork: any, index: number) => {
          return (
            <ArtworkCard
              image={artwork.url}
              key={index}
              artist={artwork.artist}
              name={artwork.title}
              pricing={artwork.pricing}
            />
          );
        })}
      </div>
    </div>
  );
}
