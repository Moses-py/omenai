import { Suspense } from "react";
import Tour from "../components/Tour";
import EditorialRecommendations from "./features/editorials/EditorialRecommendations";
import Highlight from "./features/highlight/Highlight";
import Orders from "./features/orders/Orders";
import PopularArtworks from "./features/popular_artworks/PopularArtworks";
import { SalesActivity } from "./features/sales_activity/SalesActivity";
import Loader from "./features/popular_artworks/Loader";
import OverviewComponentCard from "./components/OverviewComponentCard";
export default function OverviewPage() {
  return (
    <div className="w-full">
      <Tour />
      <Highlight />

      <div className="grid lg:grid-cols-2 gap-x-[1rem]">
        <OverviewComponentCard fullWidth={false} title="Most Popular artworks">
          <Suspense fallback={<Loader />}>
            <PopularArtworks />
          </Suspense>
        </OverviewComponentCard>

        <SalesActivity />
        <EditorialRecommendations />
        <Orders />
      </div>
    </div>
  );
}
