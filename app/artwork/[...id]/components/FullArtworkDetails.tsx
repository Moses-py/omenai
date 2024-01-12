import { ProductBoxTypes } from "./ProductBox";

export default function FullArtworkDetails({ data }: ProductBoxTypes) {
  return (
    <div className=" p-5 xl:p-[1.5rem] my-5">
      <h3 className="text-dark/70 underline font-semibold md:text-sm text-base mb-4">
        About this artwork
      </h3>
      <div className="w-full border border-dark/20 grid grid-cols-12">
        <div className="col-span-6 md:col-span-4 lg:col-span-3">
          <ul className=" flex flex-col justify-center gap-y-3 py-4 pl-4 font-semibold">
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
        <div className="col-span-6 md:col-span-8 lg:col-span-9">
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
