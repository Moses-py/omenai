import NoCover from "@/app/secure/components/NoCover";
import Link from "next/link";

export type EditorialItemProps = {
  title: string;
  date: string;
  minutes: string;
  image: string;
  summary: string;
  id: string;
};
export default function EditorialItem({
  title,
  date,
  minutes,
  image,
  summary,
  id,
}: EditorialItemProps) {
  return (
    <>
      {" "}
      <div className="px-2 py-8 bg-white flex flex-col gap-[1rem] h-full w-full">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={"article_image"}
            className="w-full h-full max-h-full object-cover object-center"
          />
        ) : (
          <NoCover />
        )}
        <div className="flex flex-col gap-[1rem] mx-0">
          <div className="flex gap-2 items-center">
            <p className="text-base-theme/60 text-[14px]">{date}</p>
            <span className="font-bold">•</span>

            <p className="text-base-theme text-base">
              <span className="italic">by</span>{" "}
              <span className="font-bold uppercase text-[14px]">
                Olabisi Onabanjo
              </span>
            </p>
            {/* <span className="font-bold">•</span> */}
          </div>
          <div className="flex flex-col gap-2">
            <Link href={`/secure/editorial/${id}/${title}`}>
              <h1 className="text-sm lg:text-[1.5rem] leading-tight font-medium ">
                {title}
              </h1>
            </Link>

            <p className="text-base-theme text-[16px]">{summary}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-base-theme/60 ">{minutes} minutes read</p>
          </div>
        </div>
      </div>
    </>
  );
}
