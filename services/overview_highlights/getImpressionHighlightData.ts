import { getApiUrl } from "@/config";
import { nextAuthOptions } from "@/lib/auth/next-auth-options";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
export async function getImpressionHighlightData() {
  const session = await getSession();
  try {
    const url = getApiUrl();
    const res = await fetch(`${url}/api/artworks/getAllImpressions`, {
      method: "POST",
      body: JSON.stringify({ id: session?.user.id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) return undefined;
    const result = await res.json();

    return result;
  } catch (error: any) {
    console.log(error);
  }
}
