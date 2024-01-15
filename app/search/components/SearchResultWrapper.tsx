"use client";

import NotFoundData from "@/components/notFound/NotFoundData";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function SearchResultWrapper() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");

  //   useEffect(() => {}, []);

  return (
    <>
      <div className="w-full">
        <div className="px-5 py-8">
          <h1 className="text-sm md:text-md lg:text-lg font-medium text-dark/80">
            No results found for term{" "}
            <span className="text-primary">&apos;{searchTerm}&apos;</span>
          </h1>
          <h2 className="text-base md:text-sm lg:text-md font-normal text-base-theme">
            Try checking for spelling errors or try another search term.
          </h2>
        </div>
        <hr className=" border-dark/30" />
        <div className="w-full h-[40vh] md:h-[50vh] grid place-items-center">
          <NotFoundData />
        </div>
      </div>
    </>
  );
}
