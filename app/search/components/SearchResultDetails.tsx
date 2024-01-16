import ArtworkCard from "@/components/artworks/ArtworkCard";
import { ArtworkImage } from "@/components/artworks/ArtworkImage";
import Loader from "@/components/loader/Loader";

type SearchResultDetailsProps = {
  data:
    | (Pick<
        ArtworkSchemaTypes,
        "art_id" | "artist" | "pricing" | "title" | "url"
      > & { _id: string })[]
    | "pending";
  searchTerm: string;
};
export default function SearchResultDetails({
  data,
  searchTerm,
}: SearchResultDetailsProps) {
  return (
    <div>
      {data === "pending" ? (
        <div className="h-[80vh] w-full grid place-items-center">
          <Loader theme="dark" />
        </div>
      ) : (
        <div className="w-full h-full">
          <div className="px-5 py-8">
            <h1 className="text-sm md:text-md lg:text-lg font-medium text-dark/80">
              {data.length} result(s) found for term{" "}
              <span className="text-blue-600">&apos;{searchTerm}&apos;</span>
            </h1>
          </div>
          <hr className=" border-dark/30" />
          <div className="2xl:columns-5 xl:columns-4 md:columns-2 xs:columns-2 columns-1 gap-y-6 my-[2rem] p-4">
            {data.map((artwork, index) => {
              return (
                <ArtworkImage
                  key={index}
                  url={artwork.url}
                  title={artwork.title}
                  author={artwork.artist}
                  art_id={artwork.art_id}
                  pricing={artwork.pricing}
                />
                //   <ArtworkCard
                //     key={index}
                //     image={artwork.url}
                //     artist={artwork.artist}
                //     name={artwork.title}
                //     pricing={artwork.pricing}
                //   />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
