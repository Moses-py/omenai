import { getApiUrl } from "@/config";

export async function uploadArtworkData(
  data: Omit<ArtworkSchemaTypes, "art_id">
) {
  try {
    const url = getApiUrl();
    const response = await fetch(`${url}/api/artworks/upload`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    }).then(async (res) => {
      const response = {
        isOk: res.ok,
        body: await res.json(),
      };

      return response;
    });

    // revalidatePath("/catalog");
    return response;
  } catch (error: any) {
    console.log(error);
  }
}
