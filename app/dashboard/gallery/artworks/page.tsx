import { ArtworkImage } from "@/components/artworks/ArtworkImage";
import NotFoundData from "@/components/notFound/NotFoundData";
import { getAllArtworksById } from "@/services/artworks/fetchAllArtworksById";

export default async function MyArtworks() {
  const artworks = await getAllArtworksById();
  return (
    <div className="w-full h-full">
      <h1 className="text-base-theme font-light text-[2rem] my-6">
        Uploaded artworks
      </h1>
      {artworks.data.length === 0 ? (
        <div className="w-full h-full grid place-items-center">
          <NotFoundData />
        </div>
      ) : (
        <div className="2xl:columns-5 xl:columns-4 md:columns-3 gap-y-6">
          {artworks.data.map(
            (
              art: {
                url: string;
                title: string;
                artist: string;
                _id: string;
                art_id: string;
              },
              index: any
            ) => {
              return (
                <ArtworkImage
                  key={index}
                  url={art.url}
                  title={art.title}
                  author={art.artist}
                  art_id={art.art_id}
                />
              );
            }
          )}
        </div>
      )}
    </div>
  );
}
