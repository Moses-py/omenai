/* eslint-disable @next/next/no-img-element */
import NoCover from "@/app/secure/components/NoCover";
import { getEditorialImageFilePreview } from "@/app/secure/editorial/admin/lib/getEditorialImageFilePreview";
import { getImageFileView } from "@/lib/storage/getImageFileView";
import Image from "next/image";
import Link from "next/link";

type EditorialArticleCardProps = {
  title: string;
  date: string;
  author: string;
  url?: string;
  id: string;
};
export default function EditorialArticleCard({
  title,
  date,
  author,
  url,
  id,
}: EditorialArticleCardProps) {
  const image_href = url && getEditorialImageFilePreview(url, 800);

  return (
    <Link
      href={`/articles/${id}/${title}`}
      className="w-full h-full text-dark cursor-pointer"
    >
      <div className="grid md:grid-cols-2 md:gap-x-4">
        <div className="mb-4">
          <span className="font-bold text-xs">{date}</span>
          <h1 className="text-sm sm:text-md xl:text-lg">{title}</h1>
          <p className="text-base md:text-sm">Olusegun Onabanjo</p>
        </div>
        <div className="w-full h-auto max-h-full">
          {url ? (
            <img
              src={image_href}
              alt={title}
              className="h-auto max-h-[500px] w-full object-top object-cover"
            />
          ) : (
            <NoCover />
          )}
        </div>
      </div>
      <hr className="border-dark/30 my-8" />
    </Link>
  );
}
