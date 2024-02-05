import { getApiUrl } from "@/config";
import { getSession } from "next-auth/react";

export async function getSalesHighlightData() {
  const session = await getSession();
  try {
    const url = getApiUrl();
    const res = await fetch(`${url}/api/sales/getAllSalesById`, {
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
