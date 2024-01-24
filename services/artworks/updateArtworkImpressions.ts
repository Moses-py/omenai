import { getApiUrl } from "@/config";
import { toast } from "sonner";

export async function updateArtworkImpressions(
  id: string,
  value: boolean,
  like_id: string
) {
  try {
    const url = getApiUrl();
    const response = await fetch(
      `${url}/api/artworks/updateArtworkImpressions`,
      {
        method: "POST",
        body: JSON.stringify({ id, value, like_id }),
      }
    ).then(async (res) => {
      const response: { isOk: boolean; body: { message: string; data: any } } =
        {
          isOk: res.ok,
          body: await res.json(),
        };

      return response;
    });

    return response;
  } catch (error: any) {
    console.log(error);
  }
}
