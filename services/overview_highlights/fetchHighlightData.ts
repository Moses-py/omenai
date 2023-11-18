import { getArtworkHighlightData } from "./getArtworkHighlightData";
import { getImpressionHighlightData } from "./getImpressionHighlightData";
import { getSalesHighlightData } from "./getSalesHighlightData";

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

  if (tag === "subscription") return "Basic";

  if (tag === "sales") {
    const result = await getSalesHighlightData();
    return result.data.length;
  }
}
