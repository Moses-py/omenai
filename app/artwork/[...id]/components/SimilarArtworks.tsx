import ArtworkCard from "@/components/artworks/ArtworkCard";
import NotFoundData from "@/components/notFound/NotFoundData";
import { fetchArtworksByCriteria } from "@/services/artworks/fetchArtworksByCriteria";

export default async function SimilarArtworks({
  medium,
  title,
}: {
  medium: string;
  title: string;
}) {
  const artworksByCriteria = await fetchArtworksByCriteria(medium);
  const artworks = artworksByCriteria.data.filter((artwork: any) => {
    return artwork.title !== title;
  });
  //   console.log(artworks);
  return (
    <div className="w-full h-full p-4 ">
      <h1 className="text-dark/70 underline font-semibold md:text-md text-sm ">
        Similar artworks
      </h1>
      {artworks.length === 0 ? (
        <div className="w-full h-full grid place-items-center">
          <NotFoundData />
        </div>
      ) : (
        <div className="flex relative overflow-x-scroll w-full">
          {artworks.map(
            (
              art: {
                url: string;
                title: string;
                artist: string;
                _id: string;
                pricing: {
                  price: string;
                  shouldShowPrice: "Yes" | "No" | string;
                };
              },
              index: any
            ) => {
              return (
                <ArtworkCard
                  key={index}
                  image={art.url}
                  name={art.title}
                  artist={art.artist}
                  pricing={art.pricing}
                />
              );
            }
          )}
        </div>
      )}
    </div>
  );
}
