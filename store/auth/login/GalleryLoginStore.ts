import { create } from "zustand";

type GalleryLoginStoreTypes = {
  isLoading: boolean;
  setIsloading: () => void;
};

export const galleryLoginStore = create<GalleryLoginStoreTypes>((set, get) => ({
  isLoading: false,
  setIsloading: () => {
    const loadingState = get().isLoading;

    set({ isLoading: !loadingState });
  },
}));
