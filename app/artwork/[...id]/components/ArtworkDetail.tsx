"use client";
import Dimensions from "./Dimensions";
import { GrCertificate } from "react-icons/gr";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { formatPrice } from "@/utils/priceFormatter";
import { IoHeartOutline } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";
import useLikedState from "@/custom/hooks/useLikedState";
import { useRouter } from "next/navigation";
import { actionStore } from "@/store/actions/ActionStore";
import { requestPrice } from "@/services/requests/requestPrice";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { useState } from "react";
import Loader from "@/components/loader/Loader";
import LoaderAnimation from "@/components/loader/LoaderAnimation";

type ArtworkDetailTypes = {
  data: ArtworkResultTypes;
  sessionId: string | undefined;
};
export default function ArtworkDetail({ data, sessionId }: ArtworkDetailTypes) {
  const { likedState, handleLike } = useLikedState(
    data.impressions as number,
    data.like_IDs as string[],
    sessionId,
    data.art_id
  );

  const [loading, setLoading] = useState(false);

  const [toggleLoginModal] = actionStore((state) => [state.toggleLoginModal]);

  const router = useRouter();
  const session = useSession();

  async function handleBuyButtonClick() {
    if (sessionId === undefined) toggleLoginModal(true);
    else {
      if (data.pricing.shouldShowPrice === "Yes") {
        router.push(`/purchase/${data.title}`);
      } else {
        setLoading(true);
        const artwork_data = {
          title: data.title,
          artist: data.artist,
          art_id: data.art_id,
          url: data.url,
          medium: data.medium,
          pricing: data.pricing,
        };
        const res = await requestPrice(
          artwork_data,
          session.data!.user.email,
          session.data!.user.name
        );

        if (res?.isOk) {
          toast.success("Price data sent. Please check your email inbox");
          setLoading(false);
        } else {
          toast.error(
            "Something went wrong, please try again or contact us for assistance."
          );
          setLoading(false);
        }
      }
    }
  }
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
      {data.certificate_of_authenticity === "Yes" && (
        <div className="flex gap-x-2 items-center">
          <GrCertificate />
          <p>
            Includes a{" "}
            <span className="font-bold underline">
              Certificate of Authenticity
            </span>
          </p>
        </div>
      )}

      <h1 className="lg:text-md text-sm font-bold">
        {data.pricing.shouldShowPrice === "Yes"
          ? formatPrice(data.pricing.price)
          : null}
      </h1>

      <div className="flex sm:flex-row flex-col gap-2">
        <button
          disabled={loading}
          onClick={handleBuyButtonClick}
          className="w-full bg-dark px-4 py-2 rounded-md  underline text-white text-base hover:bg-white disabled:bg-gray-400 disabled:cursor-not-allowed disabled:text-dark/50 hover:text-dark hover:border  hover:underline duration-300 grid place-items-center group"
        >
          {loading ? (
            <LoaderAnimation theme="dark" />
          ) : data.pricing.shouldShowPrice === "Yes" ? (
            "Purchase artwork"
          ) : (
            "Request price"
          )}
        </button>

        {(sessionId === undefined ||
          (sessionId && !likedState.ids.includes(sessionId))) && (
          <button
            onClick={() => handleLike(true)}
            className="w-full px-4 py-2 rounded-md justify-center flex items-center gap-2 underline text-dark text-base hover:bg-dark hover:text-white border border-dark duration-300 group"
          >
            <IoHeartOutline /> <span>Save artwork</span>
          </button>
        )}
        {sessionId !== undefined && likedState.ids.includes(sessionId) && (
          <button
            onClick={() => handleLike(false)}
            className="w-full px-4 py-2 rounded-md border flex justify-center items-center gap-2 hover:bg-dark/10 duration-300 border-dark/30 text-dark text-base group"
          >
            <GiCheckMark />
            <span>Remove from saved</span>
          </button>
        )}
      </div>
    </div>
  );
}
