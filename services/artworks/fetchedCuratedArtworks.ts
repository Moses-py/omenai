import { getApiUrl } from "@/config";
import { nextAuthOptions } from "@/lib/auth/next-auth-options";
import filterArtObjectsByMedium from "@/utils/filterArtObjectsByMedium";
import { getServerSession } from "next-auth";

export const fetchCuratedArtworks = async () => {
  const session = await getServerSession(nextAuthOptions);
  try {
    const url = getApiUrl();
    const response = await fetch(`${url}/api/artworks/getAllArtworks`, {
      method: "GET",
    }).then(async (res) => {
      if (!res.ok) return undefined;
      const result = await res.json();

      const curated = filterArtObjectsByMedium(
        result.data,
        session!.user.preferences
      );
      return curated;
    });

    return response;
  } catch (error: any) {
    console.log(error);
  }
};
