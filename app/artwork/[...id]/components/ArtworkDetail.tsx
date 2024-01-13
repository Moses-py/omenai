import Loader from "@/components/loader/Loader";
import Dimensions from "./Dimensions";
import { GrCertificate } from "react-icons/gr";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { formatPrice } from "@/utils/priceFormatter";

type ArtworkDetailTypes = {
  data: ArtworkResultTypes;
};
export default function ArtworkDetail({ data }: ArtworkDetailTypes) {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="">
        <h1 className="xl:text-md md:text-sm text-[1.2rem] font-semibold">
          {data.artist}
        </h1>
        <h3 className="xl:text-lg md:text-md text-sm font-semibold italic text-dark/70">
          {data.title}
        </h3>
      </div>
      <p className="text-base font-medium text-dark/80">
        Medium: {data.medium}
      </p>
      <Dimensions dimensions={data.dimensions} />

      <div className="flex gap-x-2 items-center">
        <MdOutlineWorkspacePremium />
        <p>{data.rarity} work</p>
      </div>
      <div className="flex gap-x-2 items-center">
        <GrCertificate />
        <p>
          Includes a{" "}
          <span className="font-bold underline">
            Certificate of Authenticity
          </span>
        </p>
      </div>

      <h1 className="lg:text-md text-sm font-bold">
        {data.pricing.shouldShowPrice === "Yes"
          ? formatPrice(data.pricing.price)
          : null}
      </h1>

      <button className="w-full bg-dark py-3 underline text-white text-base hover:bg-white hover:text-dark hover:border hover:border-dark hover:underline duration-300 grid place-items-center group">
        {data.pricing.shouldShowPrice === "Yes"
          ? "Purchase artwork"
          : "Request price"}
      </button>
    </div>
  );
}
