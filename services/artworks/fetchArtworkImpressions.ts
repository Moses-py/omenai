import { getApiUrl } from "@/config";

export async function fetchAllArtworkImpressions() {
  try {
    const url = getApiUrl();
    const response = await fetch(`${url}/api/artworks/getTrendingArtworks`, {
      method: "GET",
      cache: "no-store",
    }).then(async (res) => {
      if (!res.ok) return undefined;
      const result = await res.json();

      return result;
    });

    return response;
  } catch (error: any) {
    console.log(error);
  }
}
