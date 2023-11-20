import { create } from "zustand";

type GalleryProfileUpdateStoreTypes = {
  updateData: GalleryProfileUpdateData;
  setProfileUpdateData: (label: string, value: string) => void;
  clearData: () => void;
};

export const galleryProfileUpdate = create<GalleryProfileUpdateStoreTypes>(
  (set, get) => ({
    updateData: {},
    setProfileUpdateData: (label, value) => {
      const update = get().updateData;

      const updatedData = { ...update, [label]: value };

      set({ updateData: updatedData as GalleryProfileUpdateData });
    },
    clearData: () => {
      set({ updateData: {} });
    },
  })
);
