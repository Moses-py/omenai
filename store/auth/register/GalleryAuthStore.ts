import { create } from "zustand";

type GalleryAuthStoreTypes = {
  currentGallerySignupFormIndex: number;
  incrementCurrentGallerySignupFormIndex: () => void;
  decrementCurrentGallerySignupFormIndex: () => void;
};
export const useGalleryAuthStore = create<GalleryAuthStoreTypes>(
  (set, get) => ({
    currentGallerySignupFormIndex: 0,

    incrementCurrentGallerySignupFormIndex: () => {
      const index = get().currentGallerySignupFormIndex;
      set({ currentGallerySignupFormIndex: index + 1 });
    },

    decrementCurrentGallerySignupFormIndex: () => {
      const index = get().currentGallerySignupFormIndex;
      if (index === 0) {
        set({ currentGallerySignupFormIndex: 0 });
      } else {
        set({ currentGallerySignupFormIndex: index - 1 });
      }
    },
  })
);
