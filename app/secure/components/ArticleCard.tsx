"use client";
import Link from "next/link";
import NoCover from "./NoCover";

type Props = {
  image?: string;
  date: string;
  title: string;
  summary: string;
  minutes: string;
  id: string;
};

const ArticleCard = ({ image, date, title, summary, minutes, id }: Props) => {
  return (
    <>
      <div className="px-5 py-8 bg-white flex flex-col gap-[1rem] h-full w-full ">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={"article_image"}
            className="w-full h-[260px] object-cover object-center rounded-lg"
          />
        ) : (
          <NoCover />
        )}
        <div className="flex flex-col gap-[1.2rem]">
          <div className="flex justify-between items-center">
            <p className="text-base-theme text-base">{minutes} minutes read</p>
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
            <p className="text-base-theme text-[14px]">{date}</p>
            <p className="text-gray-600 text-[14px]">463 views</p>
          </div>
          {/* <div className="flex justify-end w-full">
            <button className="text-white text-[16px] px-[25px] py-[10px] rounded-lg bg-dark hover:bg-dark/50 duration-300">
              <Link href={`/`}>Read more</Link>
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
