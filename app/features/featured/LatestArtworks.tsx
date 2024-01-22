import { type } from "os";
import ArtworkCard from "../../../components/artworks/ArtworkCard";

export default function LatestArtworks({
  artworks,
  sessionId,
}: {
  artworks: any;
  sessionId: string | undefined;
}) {
  return (
    <>
      {artworks.data.length > 0 && (
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
