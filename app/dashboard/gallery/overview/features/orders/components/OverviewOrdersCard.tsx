import Image from "next/image";

type OverviewOrdersCardProps = {
  title: string;
  artist: string;
  price: string;
  buyer: string;
  order_date: string;
  url: string;
};
export default function OverviewOrdersCard({
  title,
  artist,
  price,
  buyer,
  order_date,
  url,
}: OverviewOrdersCardProps) {
  return (
    <div className="flex justify-between p-3 rounded-lg ring-1 ring-base-theme/10 shadow-sm">
      <div className=" flex gap-x-3">
        <Image
          src={url}
          alt={title}
          height={70}
          width={60}
          className="object-top object-contain rounded-lg"
        />
        <div className="flex flex-col gap-y-1">
          <p className="text-primary font-medium text-xs sm:text-base">
            {title.slice(0, 15)}
          </p>
          <span className="text-base-theme text-xs font-light">{artist}</span>
          <span className="text-base-theme text-xs font-light">{price}</span>
        </div>
      </div>
      <div className="flex flex-col gap-y-1">
        <span className="text-primary font-medium text-xs sm:text-base">
          {buyer}
        </span>
        <span className="text-base-theme text-xs font-light">{order_date}</span>
        <span className="text-base-theme text-xs font-light underline cursor-pointer">
          view
        </span>
      </div>
    </div>
  );
}
