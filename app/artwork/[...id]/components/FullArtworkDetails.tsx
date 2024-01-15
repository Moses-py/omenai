type FullArtworkDetailsType = {
  data: ArtworkResultTypes;
};
export default function FullArtworkDetails({ data }: FullArtworkDetailsType) {
  return (
    <div className=" my-5">
      <h3 className="text-dark/70 underline font-semibold text-base mb-4">
        More about this artwork
      </h3>
      <div className="w-full grid grid-cols-12">
        <div className="col-span-6 md:col-span-4">
          <ul className="w-full flex flex-col justify-center gap-y-3 py-4 font-semibold">
            <li>Materials</li>
            <li>Width</li>
            <li>Height</li>
            <li>Depth</li>
            <li>Rarity</li>
            <li>Medium</li>
            <li>Certificate of Authenticity</li>
            <li>Year</li>
          </ul>
        </div>
        <div className="col-span-6 md:col-span-8">
          <ul className=" flex flex-col text-dark/70 justify-center gap-y-3 py-4">
            <li>{data.materials}</li>
            <li>{data.dimensions.width}</li>
            <li>{data.dimensions.height}</li>
            <li>{data.dimensions.depth || "N/A"}</li>
            <li>{data.rarity}</li>
            <li>{data.medium}</li>
            <li>Included (Issued by Gallery)</li>
            <li>{data.year}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
