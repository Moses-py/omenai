"use client";
import { getImageFileView } from "@/lib/storage/getImageFileView";
import { actionStore } from "@/store/actions/ActionStore";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

type OverviewOrdersCardProps = {
  title: string;
  artist: string;
  price: string;
  order_date: string;
  url: string;
  status: string;
  order_id: string;
  state: "pending" | "history";
  payment_information?: PaymentStatusTypes;
  tracking_information?: TrackingInformationTypes;
  shipping_quote?: ShippingQuoteTypes;
};
export default function OrdersCard({
  title,
  artist,
  price,
  order_date,
  url,
  status,
  order_id,
  state,
  payment_information,
  tracking_information,
  shipping_quote,
}: OverviewOrdersCardProps) {
  const image_url = getImageFileView(url, 200);

  const [toggleUserTrackingInfoModal] = actionStore((state) => [
    state.toggleUserTrackingInfoModal,
  ]);

  const session = useSession();
  return (
    <div className="flex md:flex-row flex-col md:justify-between md:items-center px-5 py-3 rounded-lg ring-1 ring-dark/10 shadow-sm w-full">
      <div className=" flex gap-x-3">
        <Image
          src={image_url}
          alt={title}
          height={100}
          width={80}
          className="object-top object-contain"
        />
        <div className="flex flex-col">
          <p className="text-dark font-normal md:text-[18px] text-[16px]">
            {title}
          </p>
          <span className="text-dark text-[14px]">{artist}</span>
          <span className="text-dark font-bold">{price}</span>
        </div>
      </div>
      <div className="flex flex-col md:mt-0 mt-5 text-[14px] md:items-end items-start gap-y-1">
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
              disabled={tracking_information?.tracking_id === ""}
              onClick={() => toggleUserTrackingInfoModal(true)}
              className="px-4 py-2 text-white disabled:cursor-not-allowed disabled:text-dark/50 disabled:bg-gray-400 hover:bg-green-800 rounded-md bg-green-600 duration-300 grid place-items-center"
            >
              View tracking information
            </button>
          ) : (
            <div className="flex gap-x-4">
              {shipping_quote?.shipping_fees !== "" ? (
                <Link
                  href={`/payment/${order_id}?id_key=${session.data!.user.id}`}
                >
                  <button className="bg-green-600 grid place-items-center px-4 py-2 rounded-md disabled:cursor-not-allowed text-white">
                    Pay now
                  </button>
                </Link>
              ) : (
                <>
                  <button
                    disabled
                    className="px-4 py-2 text-white disabled:bg-gray-400 disabled:cursor-not-allowed disabled:text-dark/50 hover:bg-green-800 rounded-md bg-green-600 duration-300 grid place-items-center"
                  >
                    Awaiting gallery confirmation
                  </button>
                </>
              )}
            </div>
          )
        ) : null}
      </div>
    </div>
  );
}
