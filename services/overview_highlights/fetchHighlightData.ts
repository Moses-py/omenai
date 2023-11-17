import { getApiUrl } from "@/config";
import { nextAuthOptions } from "@/lib/auth/next-auth-options";
import { getServerSession } from "next-auth";
import { highlightFetchCalls } from "../generalApiCall/highlightFetchCalls";

export async function fetchHighlightData(tag: string) {
  if (tag === "artworks") {
    const result = await highlightFetchCalls("/artworks/getAllArtworksbyId");
    return result.data.length;
  }

  if (tag === "impressions") {
    const impressions = await highlightFetchCalls(
      "/artworks/getAllImpressions"
    );

    const impression_count = impressions.data.reduce(
      (acc: any, current: any) => acc + current.impressions,
      0
    );
    return impression_count;
  }

  if (tag === "subscription") return "Basic";

  if (tag === "sales") {
    const result = await highlightFetchCalls("/sales/getAllSalesById");
    return result.data.length;
  }
}
