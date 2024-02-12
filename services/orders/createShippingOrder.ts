import { getApiUrl } from "@/config";

export const createShippingOrder = async (
  buyer_id: string,
  art_id: string,
  gallery_id: string,
  save_shipping_address: boolean,
  shipping_address: IndividualAddressTypes
) => {
  const url = getApiUrl();
  try {
    const res = await fetch(`${url}/api/orders/createOrder`, {
      method: "POST",
      body: JSON.stringify({
        buyer_id,
        art_id,
        gallery_id,
        save_shipping_address,
        shipping_address,
      }),
    });
    const result = await res.json();
    return { isOk: res.ok, message: result.message };
  } catch (error: any) {
    console.log(error);
  }
};
