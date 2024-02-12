import { getImageFileView } from "@/lib/storage/getImageFileView";
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
}: OverviewOrdersCardProps) {
  const image_url = getImageFileView(url, 200);

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
          <span className="text-dark ">{price}</span>
        </div>
      </div>
      <div className="flex flex-col items-end gap-y-1">
        <span className="text-dark font-normal">{buyer}</span>
        <span className="text-dark">{order_date}</span>
        <span className="text-dark font-bold">
          {status.toLocaleUpperCase()}
        </span>
        <Link
          href="/dashboard/gallery/orders"
          className="text-dark/80 flex gap-x-1 items-center underline cursor-pointer"
        >
          View Order
          <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
}
