import { getApiUrl } from "@/config";

export async function fetchAllArtworks() {
  try {
    const url = getApiUrl();
    const response = await fetch(`${url}/api/artworks/getAllArtworks`, {
      method: "GET",
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
