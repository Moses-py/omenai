import { fetchAllArtworks } from "@/services/artworks/fetchAllArtworks";
import ArtworkSlides from "./components/ArtworkSlides";

export default async function FeaturedArtworks() {
  const artworks = await fetchAllArtworks();
  return (
    <div className=" mt-8 p-5 relative mb-[8rem]">
      <h1 className="text-dark font-normal text-md mb-4">Featured Artworks</h1>
      <ArtworkSlides artworks={artworks} />

      {/* <div className="flex overflow-x-scroll items-end gap-x-5">

      </div> */}
    </div>
  );
}
