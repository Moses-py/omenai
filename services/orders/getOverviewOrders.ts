import { getApiUrl } from "@/config";
import { nextAuthOptions } from "@/lib/auth/next-auth-options";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";

export async function getOverviewOrders() {
  const session = await getServerSession(nextAuthOptions);
  try {
    const url = getApiUrl();
    const response = await fetch(`${url}/api/orders/getOrders`, {
      method: "POST",
      body: JSON.stringify({ id: session?.user.id }),
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
