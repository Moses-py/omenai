import { getApiUrl } from "@/config";

export async function fetchUserData(id: string) {
  try {
    const url = getApiUrl();
    const res = await fetch(`${url}/api/requests/individual/getUser`, {
      method: "POST",
      body: JSON.stringify({ accountId: id }),
    });

    if (!res.ok) return undefined;
    const result = await res.json();

    return result;
  } catch (error: any) {
    console.log(error);
  }
}
