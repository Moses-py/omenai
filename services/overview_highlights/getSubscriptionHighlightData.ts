import { getSession } from "next-auth/react";

export async function getSubscriptionHighlightData() {
  const session = await getSession();

  if (session!.user.subscription_active) {
    return "Active";
  } else {
    return "Inactive";
  }
}
