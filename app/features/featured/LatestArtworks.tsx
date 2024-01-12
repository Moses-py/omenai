import { fetchAllArtworks } from "@/services/artworks/fetchAllArtworks";
import ArtworkCard from "../../../components/artworks/ArtworkCard";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/lib/auth/next-auth-options";

export default async function LatestArtworks() {
  const artworks = await fetchAllArtworks();

  return (
    <div className=" mt-8 p-4 relative mb-[4rem]">
      <h1 className="text-dark font-normal text-[20px] sm:text-md mb-8">
        Latest Artworks
      </h1>
      <div className="flex relative overflow-x-scroll w-full">
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
