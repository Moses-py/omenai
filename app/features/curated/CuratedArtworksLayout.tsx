import { fetchCuratedArtworks } from "@/services/artworks/fetchedCuratedArtworks";
import ArtworkCard from "../../../components/artworks/ArtworkCard";

export default async function CuratedArtworksLayout() {
  const userCuratedArtworks = await fetchCuratedArtworks();

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
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
