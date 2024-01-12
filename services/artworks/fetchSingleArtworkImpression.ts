import { getApiUrl } from "@/config";

export async function fetchSingleArtworkImpression(id: string) {
  try {
    const url = getApiUrl();
    const response = await fetch(
      `${url}/api/artworks/getSingleArtworkImpression`,
      {
        method: "POST",
        body: JSON.stringify({ id }),
      }
    ).then(async (res) => {
      if (!res.ok) return undefined;
      const result = await res.json();

      return result;
    });

    return response;
  } catch (error: any) {
    console.log(error);
  }
}
