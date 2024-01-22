import Loader from "@/components/loader/Loader";
import Dimensions from "./Dimensions";
import { GrCertificate } from "react-icons/gr";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { formatPrice } from "@/utils/priceFormatter";
import { IoHeartOutline } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";

type ArtworkDetailTypes = {
  data: ArtworkResultTypes;
  sessionId: string | undefined;
};
export default function ArtworkDetail({ data, sessionId }: ArtworkDetailTypes) {
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

      <div className="flex sm:flex-row flex-col gap-2">
        <button className="w-full bg-dark py-3 underline text-white text-base hover:bg-white hover:text-dark hover:border hover:border-dark hover:underline duration-300 grid place-items-center group">
          {data.pricing.shouldShowPrice === "Yes"
            ? "Purchase artwork"
            : "Request price"}
        </button>

        {(sessionId === undefined ||
          (sessionId && !data.like_IDs?.includes(sessionId))) && (
          <button className="w-full py-3 justify-center flex items-center gap-2 underline text-dark text-base hover:bg-dark hover:text-white border border-dark duration-300 group">
            <IoHeartOutline /> <span>Save artwork</span>
          </button>
        )}
        {sessionId !== undefined && data.like_IDs?.includes(sessionId) && (
          <button
            disabled
            className="w-full py-3 border flex justify-center items-center gap-2 border-dark/30 cursor-not-allowed underline text-dark/50 text-base group"
          >
            <GiCheckMark />
            <span>Artwork saved</span>
          </button>
        )}
      </div>
    </div>
  );
}
