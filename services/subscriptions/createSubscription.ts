import { getApiUrl } from "@/config";
import { generateDigit } from "@/utils/generateToken";

export const createSubscription = async (email: string, name: string) => {
  const url = getApiUrl();
  const get_subscription_payment_link = await fetch(
    "https://api.flutterwave.com/v3/payments",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.FLW_TEST_SECRET_KEY}`,
      },

      body: JSON.stringify({
        tx_ref: await generateDigit(8),
        payment_plan: process.env.FLW_PAYMENT_PLAN_ID,
        currency: "USD",
        amount: "30",
        redirect_url: `${url}/verifyTransaction`,
        customer: {
          email: email,
          name: name,
          type: "subscription",
        },
        customizations: {
          title: "Omenai gallery subscription plan",
          logo: "https://cloud.appwrite.io/v1/storage/buckets/655c43e6901e0f772192/files/omenai_logo/view?project=655231c3469bf1ef8d8f",
        },
      }),
    }
  );
  return get_subscription_payment_link;
};
