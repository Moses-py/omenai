import { create } from "zustand";

type GalleryModalStoreTypes = {
  openModal: boolean;
  updateOpenModal: () => void;
};

export const galleryModalStore = create<GalleryModalStoreTypes>((set, get) => ({
  openModal: false,
  updateOpenModal: () => {
    const modalState = get().openModal;
    set({ openModal: !modalState });
  },
}));
