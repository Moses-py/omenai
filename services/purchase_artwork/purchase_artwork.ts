import { getApiUrl } from "@/config";
import { generateDigit } from "@/utils/generateToken";

export const purchase_artwork = async (
  email: string,
  name: string,
  artwork: string,
  amount: string
) => {
  const url = getApiUrl();
  const get_purchase_payment_link = await fetch(
    "https://api.flutterwave.com/v3/payments",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.FLW_TEST_SECRET_KEY}`,
      },

      body: JSON.stringify({
        tx_ref: await generateDigit(8),
        currency: "USD",
        amount: "50",
        redirect_url: `${url}/payment/verifyTransaction`,
        customer: {
          email: email,
          name: name,
        },
        customizations: {
          title: `Omenai artwork payment: ${artwork}`,
          logo: "https://cloud.appwrite.io/v1/storage/buckets/655c43e6901e0f772192/files/omenai_logo/view?project=655231c3469bf1ef8d8f",
        },
        payment_options: "card, account",
      }),
    }
  );
  return get_purchase_payment_link;
};
