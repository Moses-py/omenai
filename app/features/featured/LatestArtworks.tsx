import ArtworkCard from "../../../components/artworks/ArtworkCard";

export default function LatestArtworks({ artworks }: { artworks: any }) {
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
