import { fetchCuratedArtworks } from "@/services/artworks/fetchedCuratedArtworks";
import ArtworkSlides from "../components/ArtworkSlides";

export default async function CuratedArtworksLayout() {
  const userCuratedArtworks = await fetchCuratedArtworks();

  return (
    <>
      {userCuratedArtworks !== undefined && userCuratedArtworks.length > 0 && (
        <div className=" mt-8 p-5 relative mb-[8rem]">
          <h1 className="text-dark font-normal text-[24px] sm:text-md mb-4">
            Curated picks: Just for you
          </h1>
          <ArtworkSlides artworks={userCuratedArtworks} />
        </div>
      )}
    </>
  );
}
