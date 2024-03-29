import NoCover from "@/app/secure/components/NoCover";
import { getEditorialImageFilePreview } from "@/app/secure/editorial/admin/lib/getEditorialImageFilePreview";
import { getImageFileView } from "@/lib/storage/getImageFileView";
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
  const image_href = getEditorialImageFilePreview(image, 400);

  return (
    <>
      {" "}
      <div className="px-2 py-8 bg-white flex flex-col gap-[1rem] h-full w-full">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image_href}
            alt={"article_image"}
            className="w-full h-[300px] sm:h-[400px] object-cover object-top"
          />
        ) : (
          <NoCover />
        )}
        <div className="flex flex-col gap-[1rem] mx-0">
          <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
            <p className="text-dark/80 text-xs">{date}</p>
            {/* <span className="font-bold">•</span> */}

            <p className="text-dark text-xs">
              <span className="italic">by</span>{" "}
              <span className="font-bold text-xs">Olabisi Onabanjo</span>
            </p>
            {/* <span className="font-bold">•</span> */}
          </div>
          <div className="flex flex-col gap-2">
            <Link href={`articles/${id}/${title}`}>
              <h1 className="text-sm lg:text-md leading-tight font-medium ">
                {title}
              </h1>
            </Link>

            <p className="text-dark text-xs">{summary}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-dark/60 text-xs">{minutes} minutes read</p>
          </div>
        </div>
      </div>
    </>
  );
}
