"use client";
import { getImageFileView } from "@/lib/storage/getImageFileView";
import { actionStore } from "@/store/actions/ActionStore";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

type OverviewOrdersCardProps = {
  title: string;
  artist: string;
  price: string;
  buyer: string;
  order_date: string;
  url: string;
  status: string;
  order_id: string;
  shipping_address?: IndividualAddressTypes;
  state: "pending" | "history" | "overview";
  payment_information?: PaymentStatusTypes;
  tracking_information?: TrackingInformationTypes;
  shipping_quote?: ShippingQuoteTypes;
};
export default function OverviewOrdersCard({
  title,
  artist,
  price,
  buyer,
  order_date,
  url,
  status,
  order_id,
  shipping_address,
  state,
  payment_information,
  tracking_information,
  shipping_quote,
}: OverviewOrdersCardProps) {
  const image_url = getImageFileView(url, 200);

  const [
    updateGalleryOrderActionModalData,
    toggleGalleryOrderActionModal,
    toggleUploadTrackingInfoModal,
    update_current_order_id,
  ] = actionStore((state) => [
    state.updateGalleryOrderActionModalData,
    state.toggleGalleryOrderActionModal,
    state.toggleUploadTrackingInfoModal,
    state.update_current_order_id,
  ]);

  function handleAcceptOrderRequest() {
    updateGalleryOrderActionModalData(buyer, shipping_address!, order_id);
    toggleGalleryOrderActionModal(true);
  }

  function handleUploadTrackingInformationRequest() {
    update_current_order_id(order_id);
    toggleUploadTrackingInfoModal(true);
  }

  return (
    <div className="flex justify-between items-center px-5 py-3 rounded-lg ring-1 ring-dark/10 shadow-sm w-full">
      <div className=" flex gap-x-3">
        <Image
          src={image_url}
          alt={title}
          height={100}
          width={80}
          className="object-top object-contain"
        />
        <div className="flex flex-col">
          <p className="text-dark font-normal text-[18px]">{title}</p>
          <span className="text-dark ">{artist}</span>
          <span className="text-dark font-bold">{price}</span>
        </div>
      </div>
      <div className="flex flex-col items-end gap-y-1">
        <span className="text-dark font-normal">
          Order ID: <span className="font-bold">{order_id}</span>
        </span>
        <span className="text-dark">{order_date}</span>
        <span className="text-dark font-bold">
          {status.toLocaleUpperCase()}
        </span>
        {state === "pending" ? (
          payment_information!.status === "completed" ? (
            <button
              disabled={tracking_information?.tracking_id !== ""}
              onClick={handleUploadTrackingInformationRequest}
              className="px-4 py-2 text-white disabled:cursor-not-allowed disabled:text-dark/50 disabled:bg-gray-400 hover:bg-green-800 rounded-md bg-green-600 duration-300 grid place-items-center"
            >
              {tracking_information?.tracking_id === ""
                ? "Upload tracking information"
                : "Tracking information uploaded"}
            </button>
          ) : (
            <div className="flex gap-x-4">
              {shipping_quote?.shipping_fees !== "" ? (
                <>
                  <button
                    disabled
                    className="bg-gray-400 grid place-items-center px-4 py-2 rounded-md disabled:cursor-not-allowed text-dark/50"
                  >
                    Order request accepted, awaiting customer payment
                  </button>
                </>
              ) : (
                <>
                  <button className="px-4 py-2 text-white rounded-md bg-red-600 hover:bg-red-800 duration-300 grid place-items-center">
                    Decline order request
                  </button>
                  <button
                    onClick={handleAcceptOrderRequest}
                    className="px-4 py-2 text-white hover:bg-green-800 rounded-md bg-green-600 duration-300 grid place-items-center"
                  >
                    Provide shipping quote
                  </button>
                </>
              )}
            </div>
          )
        ) : null}
        {state === "overview" && (
          <Link
            href="/dashboard/gallery/orders"
            className="text-dark/80 flex gap-x-1 items-center underline cursor-pointer"
          >
            View Order
            <IoIosArrowForward />
          </Link>
        )}
      </div>
    </div>
  );
}
