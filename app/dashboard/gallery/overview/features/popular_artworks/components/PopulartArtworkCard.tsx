import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
type PopularArtworkCardProps = {
  url: string;
  title: string;
  artist: string;
  impression_count: number;
};
export default function PopulartArtworkCard({
  url,
  title,
  artist,
  impression_count,
}: PopularArtworkCardProps) {
  return (
    <div className="flex justify-between items-center px-5 py-3 rounded-lg ring-1 ring-base-theme/10 shadow-sm">
      <div className=" w-auto flex items-center gap-x-3">
        <Image
          src={url}
          alt={title}
          height={80}
          width={60}
          className="object-top object-contain rounded-lg"
        />
        <div className="flex flex-col gap-y-1">
          <p className="text-dark font-normal text-xs sm:text-base">{title}</p>
          <span className="text-base-theme text-xs font-light">{artist}</span>
        </div>
      </div>
      <div className="w-fit">
        <span className="text-base-theme text-xs font-light">
          {`${impression_count} impressions`}
        </span>
      </div>
    </div>
  );
}
