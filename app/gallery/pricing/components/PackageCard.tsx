"use client";
import { galleryPricingStore } from "@/store/gallery/gallery_pricing/GalleryPricing";
import MonthlyPricingPlan from "./MonthlyPricingPlan";
import PackageTab from "./PackageTab";
import AnnualPricingPlan from "./AnnualPricingPlan";

export function PackageCard() {
  const [activeTab] = galleryPricingStore((state) => [
    state.activeTab,
    state.updateActiveTab,
  ]);

  return (
    <div className="w-full">
      <div className="w-full flex justify-center">
        <PackageTab />
      </div>
      <div className="my-6 flex justify-center items-center xl:px-[8rem]">
        {activeTab === "annual" ? (
          <AnnualPricingPlan />
        ) : (
          <MonthlyPricingPlan />
        )}
      </div>
    </div>
  );
}
