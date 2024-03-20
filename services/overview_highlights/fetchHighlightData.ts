import { getServerSession } from "next-auth";
import { getArtworkHighlightData } from "./getArtworkHighlightData";
import { getImpressionHighlightData } from "./getImpressionHighlightData";
import { getSalesHighlightData } from "./getSalesHighlightData";
import { nextAuthOptions } from "@/lib/auth/next-auth-options";
import { getSubscriptionHighlightData } from "./getSubscriptionHighlightData";

export async function fetchHighlightData(tag: string) {
  if (tag === "artworks") {
    const result = await getArtworkHighlightData();
    return result.data.length;
  }

  if (tag === "impressions") {
    const impressions = await getImpressionHighlightData();

    const impression_count = impressions.data.reduce(
      (acc: any, current: any) => acc + current.impressions,
      0
    );
    return impression_count;
  }

  if (tag === "subscription") {
    const result = await getSubscriptionHighlightData();
    return result;
  }

  if (tag === "sales") {
    const result = await getSalesHighlightData();
    return result.data.length;
  }
}
