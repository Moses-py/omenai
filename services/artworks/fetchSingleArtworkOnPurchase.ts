import { getApiUrl } from "@/config";

export async function fetchSingleArtworkOnPurchase(title: string) {
  try {
    const url = getApiUrl();
    const response = await fetch(
      `${url}/api/artworks/getSingleArtworkOnPurchase`,
      {
        method: "POST",
        body: JSON.stringify({ title }),
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
