import { getApiUrl } from "@/config";
import { nextAuthOptions } from "@/lib/auth/next-auth-options";
import { getServerSession } from "next-auth";

export async function retrieveSubscriptionData(email: string) {
  try {
    const url = getApiUrl();
    const res = await fetch(
      `${url}/api/subscriptions/getUserSubscriptionData`,
      {
        method: "POST",
        body: JSON.stringify({ email }),
      }
    );

    const result = await res.json();
    return { isOk: res.ok, message: result.message, data: result.data };
  } catch (error: any) {
    console.log(error);
  }
}
