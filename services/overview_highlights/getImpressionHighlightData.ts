import { getApiUrl } from "@/config";
import { nextAuthOptions } from "@/lib/auth/next-auth-options";
import { getServerSession } from "next-auth";
export async function getImpressionHighlightData() {
  const session = await getServerSession(nextAuthOptions);
  try {
    const url = getApiUrl();
    const response = await fetch(`${url}/api/artworks/getAllImpressions`, {
      method: "POST",
      body: JSON.stringify({ id: session?.user.id }),
      headers: {
        "Content-Type": "application/json",
      },
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
