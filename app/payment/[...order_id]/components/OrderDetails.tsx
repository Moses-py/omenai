/* eslint-disable @next/next/no-img-element */
"use client";

import Loader from "@/components/loader/Loader";
import { getImageFileView } from "@/lib/storage/getImageFileView";
import { getSingleOrder } from "@/services/orders/getSingleOrder";
import { formatPrice } from "@/utils/priceFormatter";
import { useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import PayNowButton from "./PayNowButton";
import { calculatePurchaseGrandTotal } from "@/utils/calculatePurchaseGrandTotal";

export default function OrderDetails({ order_id }: { order_id: string }) {
  const { data: order, isLoading } = useQuery({
    queryKey: ["load_order_purchase_data"],
    queryFn: async () => {
      const data = await getSingleOrder(order_id);
      if (data?.isOk) {
        return data.data;
      } else {
        throw new Error("Uh oh! Something went wrong!");
      }
    },
  });
  if (order === null) return notFound();

  if (isLoading) {
    return (
      <div className="w-full h-[80vh] grid place-items-center">
        <Loader theme="dark" />
      </div>
    );
  }
  const image_href = getImageFileView(order.artwork_data.url, 200);
  const total = calculatePurchaseGrandTotal(
    formatPrice(order.artwork_data.pricing.price),
    order.shipping_quote.shipping_fees,
    order.shipping_quote.taxes
  );
  return (
    <div className="grid-cols-1 grid md:grid-cols-2 xl:grid-cols-3 my-[3rem] p-5 gap-4">
      <div className="col-span-1 xl:col-span-2">
        <PayNowButton
          art_id={order.artwork_data.art_id}
          artwork={order.artwork_data.title}
          amount={total}
          gallery_id={order.gallery_id}
          order_id={order_id}
        />
      </div>

      <div className="w-full cols-span-1 h-full">
        <div className="border border-dark/20 p-5">
          <div className="flex flex-col gap-2">
            <img
              src={image_href}
              alt={order.artwork_data.title + " image"}
              className="w-auto max-w-[200px] max-h-[400px] h-auto aspect-auto object-top object-contain cursor-pointer"
            />
            <div className="">
              <div className="flex justify-between items-center">
                <p className="font-medium text-dark text-[18px]">
                  {order.artwork_data.artist.substring(0, 20)}
                  {order.artwork_data.artist.length > 20 && "..."}
                </p>
              </div>
              <p className="font-normal text-dark text-[20px] italic">
                {order.artwork_data.title.substring(0, 20)}
                {order.artwork_data.title.length > 20 && "..."}
              </p>
              <p className="font-bold  text-dark">
                Price: {formatPrice(order.artwork_data.pricing.price)}
              </p>
            </div>
          </div>
          <hr className="border-dark/30 my-5" />

          <div className="text-[18px]">
            <div className="flex justify-between items-center  my-3 text-dark">
              <p>Price</p>
              <p className="font-bold">
                {formatPrice(order.artwork_data.pricing.price)}
              </p>
            </div>
            <div className="flex justify-between items-center text-dark my-3">
              <p>Shipping</p>
              <p className="font-bold">${order.shipping_quote.shipping_fees}</p>
            </div>
            <div className="flex justify-between items-center text-dark my-3">
              <p>Taxes</p>
              <p className="font-bold">${order.shipping_quote.taxes}</p>
            </div>
            <div className="flex justify-between items-center text-dark my-3">
              <p>Package carrier</p>
              <p className="font-bold">
                {order.shipping_quote.package_carrier}
              </p>
            </div>

            <div className="flex justify-between items-center font-bold text-[20px] mt-10">
              <p>Grand total</p>
              <p>${total}</p>
            </div>
            {order.shipping_quote.additional_information && (
              <div className="flex justify-between items-center text-dark my-3">
                <p>Additional information</p>
                <p className="font-bold">
                  {order.shipping_quote.additional_information}
                </p>
              </div>
            )}
            <p className="my-3 text-dark italic">
              *Additional duties and taxes may apply at import
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
