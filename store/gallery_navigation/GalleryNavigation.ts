import { create } from "zustand";

type GalleryNavigationActionStore = {
  open: boolean;
  setOpen: (val?: boolean) => void;
  openMobileNav: boolean;
  setOpenMobileNav: () => void;
};

export const galleryNavigationActions = create<GalleryNavigationActionStore>(
  (set, get) => ({
    open: false,
    setOpen: (val?: boolean) => {
      const openState = get().open;
      if (val && typeof val === "boolean") {
        set({ open: val });
      } else {
        set({ open: !openState });
      }
    },
    openMobileNav: false,
    setOpenMobileNav: () => {
      const openState = get().openMobileNav;

      set({ openMobileNav: !openState });
    },
  })
);
