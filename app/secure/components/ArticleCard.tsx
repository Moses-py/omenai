"use client";
import Link from "next/link";
import NoCover from "./NoCover";
import { getImageFileView } from "@/lib/storage/getImageFileView";
import { getEditorialImageFilePreview } from "../editorial/admin/lib/getEditorialImageFilePreview";

type Props = {
  image?: string;
  date: string;
  title: string;
  summary: string;
  minutes: string;
  id: string;
  views: number;
};

const ArticleCard = ({
  image,
  date,
  title,
  summary,
  minutes,
  id,
  views,
}: Props) => {
  console.log(image);
  const image_href = getEditorialImageFilePreview(image as string, 300);
  return (
    <>
      <div className="px-5 py-8 bg-white flex flex-col gap-[1rem] h-full w-full ">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image_href}
            alt={"article_image"}
            className="w-full h-[260px] object-cover object-top rounded-lg"
          />
        ) : (
          <NoCover />
        )}
        <div className="flex flex-col gap-[1rem]">
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
            <Link href={`/articles/${id}/${title}`}>
              <h1 className="text-sm lg:text-[1.5rem] leading-tight font-medium ">
                {title}
              </h1>
            </Link>

            <p className="text-base-theme text-[16px]">{summary}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-base-theme/60 ">{minutes} minutes read</p>

            <p className="text-base-theme/60 text-[14px]">{views} views</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
