"use client";

import { fetchSearchKeyWordResults } from "@/services/search/fetchSearchKeywordResults";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import NotFoundSearchResult from "./NotFoundSearchResult";
import SearchResultDetails from "./SearchResultDetails";

export default function SearchResultWrapper() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const [searchResults, setSearchResults] = useState<
    | (Pick<
        ArtworkSchemaTypes,
        "art_id" | "artist" | "pricing" | "title" | "url"
      > & { _id: string })[]
    | []
    | "pending"
  >("pending");

  useEffect(() => {
    setSearchResults("pending");
    const getResults = async () => {
      const data = await fetchSearchKeyWordResults(searchTerm as string);
      if (data !== undefined) setSearchResults(data.data);

      if (data === undefined)
        toast.error("An error has occured, please try again");
    };

    getResults();
  }, [searchTerm]);

  return (
    <>
      <div className="w-full">
        {searchResults.length === 0 ? (
          <NotFoundSearchResult />
        ) : (
          <SearchResultDetails
            data={searchResults}
            searchTerm={searchTerm as string}
          />
        )}
      </div>
    </>
  );
}
