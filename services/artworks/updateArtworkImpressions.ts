import { getApiUrl } from "@/config";
import { toast } from "sonner";

export async function updateArtworkImpressions(id: string) {
  try {
    const url = getApiUrl();
    const response = await fetch(
      `${url}/api/artworks/updateArtworkImpressions`,
      {
        method: "POST",
        body: JSON.stringify({ id }),
      }
    ).then(async (res) => {
      const response: { isOk: boolean; body: { message: string } } = {
        isOk: res.ok,
        body: await res.json(),
      };

      if (!res.ok) {
        toast.error(response.body.message);
      }

      return response;
    });

    return response;
  } catch (error: any) {
    console.log(error);
  }
}
