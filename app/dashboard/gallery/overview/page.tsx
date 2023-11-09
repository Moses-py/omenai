"use client";
import Tour from "../components/Tour";
import EditorialRecommendations from "./features/editorials/EditorialRecommendations";
import Highlight from "./features/highlight/Highlight";
import Orders from "./features/orders/Orders";
import PopularArtworks from "./features/popular_artworks/PopularArtworks";
import { SalesActivity } from "./features/sales_activity/SalesActivity";
export default function OverviewPage() {
  return (
    <div className="w-full">
      <Tour />
      <Highlight />

      <div className="grid lg:grid-cols-2 gap-x-[1rem]">
        <PopularArtworks />
        <SalesActivity />
        <EditorialRecommendations />
        <Orders />
      </div>
    </div>
  );
}
