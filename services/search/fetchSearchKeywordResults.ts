import { getApiUrl } from "@/config";

export async function fetchSearchKeyWordResults(searchTerm: string) {
  try {
    const url = getApiUrl();
    const response = await fetch(`${url}/api/search`, {
      method: "POST",
      body: JSON.stringify({ searchTerm }),
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
