import { getApiUrl } from "@/config";

export const updateOrderLockStatus = async (
  art_id: string,
  lock_status: boolean
) => {
  const url = getApiUrl();
  try {
    const res = await fetch(`${url}/api/orders/updateOrderLockStatus`, {
      method: "POST",
      body: JSON.stringify({
        art_id,
        lock_status,
      }),
    });
    const result = await res.json();
    return { isOk: res.ok, message: result.message };
  } catch (error: any) {
    console.log(error);
  }
};
