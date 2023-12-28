import { fetchAllArtworks } from "@/services/artworks/fetchAllArtworks";
import ArtworkSlides from "../components/ArtworkSlides";

export default async function LatestArtworks() {
  const artworks = await fetchAllArtworks();
  return (
    <div className=" mt-8 p-5 relative mb-[8rem]">
      <h1 className="text-dark font-normal text-[24px] sm:text-md mb-4">
        Latest Artworks
      </h1>
      <ArtworkSlides artworks={artworks.data} />
    </div>
  );
}
