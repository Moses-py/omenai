import { getApiUrl } from "@/config";

export async function cancelSubscription(email: string) {
  try {
    const url = getApiUrl();
    const res = await fetch(`${url}/api/subscriptions/cancelSubscription`, {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    const result = await res.json();
    return { isOk: res.ok, message: result.message };
  } catch (error: any) {
    console.log(error);
  }
}
