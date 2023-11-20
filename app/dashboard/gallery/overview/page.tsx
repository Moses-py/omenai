import { Suspense } from "react";
import Tour from "../components/Tour";
import EditorialRecommendations from "./features/editorials/EditorialRecommendations";
import Highlight from "./features/highlight/Highlight";
import Orders from "./features/orders/Orders";
import PopularArtworks from "./features/popular_artworks/PopularArtworks";
import Loader from "../components/Loader";
import OverviewComponentCard from "./components/OverviewComponentCard";
import ActivityWrapper from "./features/sales_activity/ActivityWrapper";

export default function OverviewPage() {
  return (
    <div className="w-full">
      <Tour />
      <Highlight />

      <div className="grid lg:grid-cols-2 gap-x-[1rem]">
        <OverviewComponentCard
          fullWidth={false}
          title="Most Popular artworks"
          id="tour-search"
        >
          <Suspense fallback={<Loader />}>
            <PopularArtworks />
          </Suspense>
        </OverviewComponentCard>

        <Suspense fallback={<Loader />}>
          <ActivityWrapper />
        </Suspense>

        <Suspense fallback={<Loader />}>
          <Orders />
        </Suspense>

        <EditorialRecommendations />
      </div>
    </div>
  );
}
