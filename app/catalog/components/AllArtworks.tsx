import ArtworkCard from "@/components/artworks/ArtworkCard";
import { ArtworkImage } from "@/components/artworks/ArtworkImage";
import NotFoundData from "@/components/notFound/NotFoundData";

type AllArtworksTypes = {
  data: ArtworkResultTypes[];
};
export default function AllArtworks({ data }: AllArtworksTypes) {
  return (
    <div className="p-4">
      {data.length === 0 ? (
        <div className="w-full h-full grid place-items-center">
          <NotFoundData />
        </div>
      ) : (
        <div className="2xl:columns-5 xl:columns-4 md:columns-3 xs:columns-2 columns-1 gap-y-6">
          {data.map((art: ArtworkResultTypes, index: number) => {
            return (
              <div key={index}>
                <ArtworkImage
                  key={index}
                  url={art.url}
                  title={art.title}
                  author={art.artist}
                  art_id={art.art_id}
                  pricing={art.pricing}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
