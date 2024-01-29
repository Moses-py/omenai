"use client";
import Link from "next/link";
import EditorialsGrid from "./components/EditorialsGrid";
import { useQuery } from "@tanstack/react-query";
import { listEditorials } from "@/app/secure/editorial/admin/lib/getAllBlogArticles";
import Loader from "@/components/loader/Loader";

export default function Editorials() {
  const { data: editorials, isLoading } = useQuery({
    queryKey: ["editorials"],
    queryFn: async () => {
      const data = await listEditorials();
      return data;
    },
  });

  if (isLoading)
    return (
      <div className="h-[40vh] w-full place-items-center grid">
        <Loader theme={"dark"} />
      </div>
    );

  return (
    <>
      {editorials?.length === 0 ? null : (
        <div className="p-1 sm:p-4 relative my-[4rem] md:my-[8rem]">
          <div className="flex justify-between items-center p-2">
            <h1 className="text-dark font-normal text-[20px] sm:text-md">
              Omenai editorials
            </h1>
            <Link
              href={""}
              className="text-dark font-normal sm:text-base underline break-words"
            >
              View all editorials
            </Link>
          </div>
          <EditorialsGrid editorials={editorials} />
        </div>
      )}
    </>
  );
}
