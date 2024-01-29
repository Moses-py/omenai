import ArtworkDetail from "./ArtworkDetail";
import FullArtworkDetails from "./FullArtworkDetails";
import ImageBox from "./ImageBox";

type ProductBoxTypes = {
  data: ArtworkResultTypes;
  sessionId: string | undefined;
};

export default function ProductBox({ data, sessionId }: ProductBoxTypes) {
  return (
    <div className="md:container p-3 xl:p-[1.5rem] my-5">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="h-full grid place-items-center">
          <ImageBox url={data.url} />
        </div>

        {/* Data */}
        <div className="w-full h-full">
          <ArtworkDetail data={data} sessionId={sessionId} />
          <FullArtworkDetails data={data} />
        </div>
      </div>
    </div>
  );
}
