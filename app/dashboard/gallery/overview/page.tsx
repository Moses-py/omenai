import Highlight from "./features/highlight/Highlight";
import PopularArtworks from "./features/popular_artworks/PopularArtworks";
import { SalesActivity } from "./features/sales_activity/SalesActivity";
export default function OverviewPage() {
  return (
    <div className="w-full">
      <Highlight />

      <div className="grid lg:grid-cols-2 gap-x-[1rem]">
        <PopularArtworks />
        <SalesActivity />
      </div>
    </div>
  );
}
