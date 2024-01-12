import ArtworkDetail from "./ArtworkDetail";
import ImageBox from "./ImageBox";

export type ProductBoxTypes = {
  data: ArtworkSchemaTypes & {
    _id: string;
    updatedAt: string;
    createdAt: string;
  };
};
export default function ProductBox({ data }: ProductBoxTypes) {
  return (
    <div className="p-3 xl:p-[1.5rem] my-5">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="h-full grid place-items-center">
          <ImageBox url={data.url} title={data.title} />
        </div>

        {/* Data */}
        <div className="w-full h-full">
          <ArtworkDetail data={data} />
        </div>
      </div>
    </div>
  );
}
