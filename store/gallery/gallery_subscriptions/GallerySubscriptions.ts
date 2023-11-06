import { create } from "zustand";

type GallerySubscriptionStoreTypes = {
  toggle: boolean;
  updateToggle: () => void;
};

export const gallerySubscriptionStore = create<GallerySubscriptionStoreTypes>(
  (set, get) => ({
    toggle: true,
    updateToggle: () => {
      const toggleState = get().toggle;
      set({ toggle: !toggleState });
    },
  })
);
