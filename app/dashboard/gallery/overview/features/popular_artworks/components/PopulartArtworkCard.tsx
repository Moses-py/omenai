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
    <div className="flex flex-col gap-3 h-full w-full">
      <div className=" w-full flex items-center justify-center">
        <img
          src={url}
          alt={title}
          className="w-fit h-fit object-top object-contain rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <p className="text-primary font-medium text-xs sm:text-base">
          {title.slice(0, 15)}
        </p>
        {/* <span className="text-base-theme text-xs font-light">{artist}</span> */}
        <span className="text-base-theme text-xs font-light">
          {impression_count} impressions
        </span>
      </div>
    </div>
  );
}
