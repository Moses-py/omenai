import { getApiUrl } from "@/config";

export async function requestPrice(
  data: Pick<
    ArtworkSchemaTypes,
    "title" | "artist" | "art_id" | "pricing" | "url" | "medium"
  >,
  email: string,
  name: string
) {
  try {
    const url = getApiUrl();
    const res = await fetch(`${url}/api/requests/pricing/requestPrice`, {
      method: "POST",
      body: JSON.stringify({ data, email, name }),
    });

    if (!res.ok) return undefined;
    const result = await res.json();

    return { isOk: res.ok, message: result.message };
  } catch (error: any) {
    console.log(error);
  }
}
