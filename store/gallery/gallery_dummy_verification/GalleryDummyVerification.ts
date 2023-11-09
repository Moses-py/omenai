import { create } from "zustand";

type GalleryDummyVerificationProps = {
  open: boolean;
  updateOpen: () => void;
};

export const galleryDummyVerification = create<GalleryDummyVerificationProps>(
  (set, get) => ({
    open: false,
    updateOpen: () => {
      const openState = get().open;
      set({ open: !openState });
    },
  })
);
