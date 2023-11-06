import { create } from "zustand";

type GalleryPricingStoreTypes = {
  activeTab: "annual" | "monthly";
  updateActiveTab: (tab: "annual" | "monthly") => void;
};

export const galleryPricingStore = create<GalleryPricingStoreTypes>(
  (set, get) => ({
    activeTab: "monthly",
    updateActiveTab: (tab: "annual" | "monthly") => {
      set({ activeTab: tab });
    },
  })
);
