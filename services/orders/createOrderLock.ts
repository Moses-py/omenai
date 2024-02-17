import { getApiUrl } from "@/config";

export const createOrderLock = async (art_id: string, user_id: string) => {
  const url = getApiUrl();
  try {
    const res = await fetch(`${url}/api/locks/createLock`, {
      method: "POST",
      body: JSON.stringify({
        art_id,
        user_id,
      }),
    });
    const result = await res.json();
    return { isOk: res.ok, message: result.message };
  } catch (error: any) {
    console.log(error);
  }
};
