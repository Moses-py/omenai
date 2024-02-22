import { getApiUrl } from "@/config";
import filterArtObjectsByMedium from "@/utils/filterArtObjectsByMedium";
import { SessionContextValue } from "next-auth/react";

export const fetchCuratedArtworks = async (session: SessionContextValue) => {
  try {
    const url = getApiUrl();
    const res = await fetch(`${url}/api/artworks/getAllArtworks`, {
      method: "GET",
    });

    const result = await res.json();
    const curated = filterArtObjectsByMedium(
      result.data,
      session!.data!.user.preferences
    );
    return { isOk: res.ok, data: curated };
  } catch (error: any) {
    console.log(error);
  }
};
