import { create } from "zustand";

type GalleryLogoUpdateProps = {
  modal: boolean;
  updateModal: (val: boolean) => void;
};

export const galleryLogoUpdate = create<GalleryLogoUpdateProps>((set, get) => ({
  modal: false,
  updateModal: (val: boolean) => {
    set({ modal: val });
  },
}));
