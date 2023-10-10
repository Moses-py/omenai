import { getApiUrl } from "@/config";

export async function getAllTokens() {
  try {
    const url = getApiUrl();
    const response = await fetch(
      `${url}/api/requests/verify/getAllVerificationTokens`
    ).then(async (res) => {
      if (!res.ok) undefined;
      const result = await res.json();
      return result.data;
    });

    return response;
  } catch (error: any) {
    console.log(error);
  }
}
