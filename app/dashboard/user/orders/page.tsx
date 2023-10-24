import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  IoCheckmark,
  IoCloseCircle,
  IoCloseCircleOutline,
} from "react-icons/io5";

export default function Orders() {
  if (items.length === 0)
    return (
      <div className="grid place-items-center py-16 px-5">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/icons/history.png"
            alt="auction icon"
            width={100}
            height={100}
          />

          <p className=" text-center text-sm">No order records available</p>
        </div>
      </div>
    );

  return (
    <div className="space-y-10 py-5 px-2">
      {items.map(
        (
          {
            date,
            status,
            image,
            author,
            name,
            price,
            orderId,
            paymentMethod,
            deliveryMethod,
          },
          index
        ) => (
          <div key={index} className="border border-line">
            <div className="p-3 flex items-center justify-between border-b border-line">
              <p className="text-base text-base-theme">{date}</p>

              {StatusRender[status.toLowerCase() as keyof typeof StatusRender]}
            </div>

            <div className="p-3 flex items-center border-b border-line gap-4">
              <Image
                src={image}
                alt=""
                width={60}
                height={60}
                className="h-[60px] object-cover"
              />

              <div>
                <p className="text-primary text-base font-medium">{name}</p>
                <p className="text-base-theme">{author}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 lg:items-center justify-between p-3 border-b text-base-theme border-line gap-4">
              <div className="">
                <p className="text-base ">Order no.</p>
                <p className="text-base text-[#969696]">{orderId}</p>
              </div>
              <div className="">
                <p className="text-base ">Price total</p>
                <p className="text-base text-[#969696]">${price}</p>
              </div>
              <div className="">
                <p className="text-base ">Payment method</p>
                <p className="text-base text-[#969696]">{paymentMethod}</p>
              </div>
              <div className="">
                <p className="text-base ">Delivery method</p>
                <p className="text-base text-[#969696]">{deliveryMethod}</p>
              </div>
            </div>

            <div className="py-5 px-8 flex items-end">
              <p className="text-[#969696] ml-auto">
                Need some help?{" "}
                <Link
                  href="mailto:moses@omenai.net"
                  className="text-primary underline font-medium"
                >
                  Contact us
                </Link>
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
}

const StatusRender = {
  completed: (
    <div className="flex gap-2 items-center">
      <IoCheckmark className="text-green-500 h-6 w-6" />
      <p className="text-base text-green-500">Completed</p>
    </div>
  ),
  cancelled: (
    <div className="flex gap-2 items-center">
      <IoCloseCircleOutline className="text-red-500 h-6 w-6" />
      <p className="text-base text-red-500">Cancelled</p>
    </div>
  ),
  "in progress": (
    <div className="flex gap-2 items-center">
      <Image
        src="/icons/status.png"
        alt="icon"
        width={24}
        height={24}
        className=""
      />
      <p className="text-base text-base-theme">In progress</p>
    </div>
  ),
};

const items = [
  {
    name: "Aurora borealis, p.i 2021",
    author: "Leornado da vinci",
    image: "/images/17f486286ed3d1c428f0dc92d4ab9381.jpeg",
    orderId: "430583583053",
    price: "2600.00",
    paymentMethod: "Card Payment",
    deliveryMethod: "Pickup station",
    date: "October 5, 2023",
    status: "Completed",
  },
  {
    name: "Resplendent Solitude",
    author: "Michal D’Angelo",
    image: "/images/d16e8db0973b47b32d2c713c5efee39f.jpeg",
    orderId: "430583583053",
    price: "1200.47",
    paymentMethod: "Card Payment",
    deliveryMethod: "Pickup station",
    date: "October 5, 2023",
    status: "Cancelled",
  },
  {
    name: "Captivating Serenity, 1998",
    author: "Alfredo di Stefano",
    image: "/images/905a0153674a571838496761b4371803.jpeg",
    orderId: "430583583053",
    price: "2600.00",
    paymentMethod: "Card Payment",
    deliveryMethod: "Pickup station",
    date: "October 5, 2023",
    status: "In progress",
  },
];
