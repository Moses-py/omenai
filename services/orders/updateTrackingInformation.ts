import { getApiUrl } from "@/config";

export const updateOrderTrackingData = async (
  data: TrackingInformationTypes,
  order_id: string
) => {
  const url = getApiUrl();
  try {
    const res = await fetch(`${url}/api/orders/updateOrderTrackingData`, {
      method: "POST",
      body: JSON.stringify({
        data,
        order_id,
      }),
    });
    const result = await res.json();
    return { isOk: res.ok, message: result.message };
  } catch (error: any) {
    console.log(error);
  }
};
