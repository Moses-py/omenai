import { getApiUrl } from "@/config";

export const updateArtworkLikes = async (
  id: string,
  like_id: string,
  value: boolean
) => {
  try {
    const url = getApiUrl();
    const response = await fetch(
      `${url}/api/artworks/updateArtworkImpressions`,
      {
        method: "POST",
        body: JSON.stringify({ id, value, like_id }),
      }
    ).then(async (res) => {
      const response: { isOk: boolean } = {
        isOk: res.ok,
      };

      return response;
    });

    return response;
  } catch (error: any) {
    console.log(error);
  }
};
