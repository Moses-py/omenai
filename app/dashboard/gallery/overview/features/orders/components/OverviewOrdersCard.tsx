import { getImageFileView } from "@/lib/storage/getImageFileView";
import Image from "next/image";
import Link from "next/link";

type OverviewOrdersCardProps = {
  title: string;
  artist: string;
  price: string;
  buyer: string;
  order_date: string;
  url: string;
  status: string;
};
export default function OverviewOrdersCard({
  title,
  artist,
  price,
  buyer,
  order_date,
  url,
  status,
}: OverviewOrdersCardProps) {
  const image_url = getImageFileView(url, 200);

  return (
    <div className="flex justify-between items-center px-5 py-3 rounded-lg ring-1 ring-dark/10 shadow-sm w-full">
      <div className=" flex gap-x-3">
        <Image
          src={image_url}
          alt={title}
          height={70}
          width={60}
          className="object-top object-contain rounded-lg"
        />
        <div className="flex flex-col gap-y-2">
          <p className="text-dark font-normal sm:text-base">{title}</p>
          <span className="text-dark font-light">{artist}</span>
          <span className="text-dark font-light">{price}</span>
        </div>
      </div>
      <div className="flex flex-col items-end gap-y-1">
        <span className="text-dark font-normal  sm:text-base">{buyer}</span>
        <span className="text-dark font-light">{order_date}</span>
        <span className="text-dark font-light">{status}</span>
        <Link
          href="/dashboard/gallery/orders"
          className="text-dark/80 font-light underline cursor-pointer"
        >
          View order
        </Link>
      </div>
    </div>
  );
}
