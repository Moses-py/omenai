import { getApiUrl } from "@/config";
import { nextAuthOptions } from "@/lib/auth/next-auth-options";
import { getCurrentMonthAndYear } from "@/utils/getCurrentMonthAndYear";
import { getServerSession } from "next-auth";

export async function getSalesActivityData() {
  const session = await getServerSession(nextAuthOptions);
  const { year } = getCurrentMonthAndYear();
  try {
    const url = getApiUrl();
    const response = await fetch(`${url}/api/sales/getActivityById`, {
      method: "POST",
      body: JSON.stringify({ id: session?.user.id, year }),
    }).then(async (res) => {
      if (!res.ok) return undefined;
      const result = await res.json();

      return result;
    });

    return response;
  } catch (error: any) {
    console.log(error);
  }
}
