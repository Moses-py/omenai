import { getApiUrl } from "@/config";

import { getSession } from "next-auth/react";
export async function getArtworkHighlightData() {
  const session = await getSession();
  try {
    const url = getApiUrl();
    const response = await fetch(`${url}/api/artworks/getAllArtworksbyId`, {
      method: "POST",
      body: JSON.stringify({ id: session?.user.id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) return undefined;
    const result = await response.json();

    return result;
  } catch (error: any) {
    console.log(error);
  }
}
