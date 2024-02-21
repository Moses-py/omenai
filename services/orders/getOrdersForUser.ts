import { getApiUrl } from "@/config";
import { nextAuthOptions } from "@/lib/auth/next-auth-options";
import { getServerSession } from "next-auth";

export async function getOrdersForUser() {
  const session = await getServerSession(nextAuthOptions);
  try {
    const url = getApiUrl();
    const res = await fetch(`${url}/api/orders/getOrdersByUserId`, {
      method: "POST",
      body: JSON.stringify({ id: session?.user.id }),
    });

    const result = await res.json();
    return { isOk: res.ok, message: result.message, data: result.data };
  } catch (error: any) {
    console.log(error);
  }
}
