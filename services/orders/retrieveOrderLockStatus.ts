import { getApiUrl } from "@/config";

export const retrieveOrderLockStatus = async (order_id: string) => {
  const url = getApiUrl();
  try {
    const res = await fetch(`${url}/api/orders/retrieveOrderLockStatus`, {
      method: "POST",
      body: JSON.stringify({
        order_id,
      }),
    });
    const result = await res.json();
    return { isOk: res.ok, message: result.message, data: result.data };
  } catch (error: any) {
    console.log(error);
  }
};
