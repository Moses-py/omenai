import { getApiUrl } from "@/config";

export async function fetchSingleArtwork(title: string) {
  try {
    const url = getApiUrl();
    const response = await fetch(`${url}/api/artworks/getSingleArtwork`, {
      method: "POST",
      body: JSON.stringify({ title }),
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
