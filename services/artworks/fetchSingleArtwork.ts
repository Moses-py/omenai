import { getApiUrl } from "@/config";

export async function fetchSingleArtwork(title: string) {
  try {
    const url = getApiUrl();
    const res = await fetch(`${url}/api/artworks/getSingleArtwork`, {
      method: "POST",
      body: JSON.stringify({ title }),
    });

    const result = await res.json();

    return { isOk: res.ok, message: result.message, data: result.data };
  } catch (error: any) {
    console.log(error);
  }
}
