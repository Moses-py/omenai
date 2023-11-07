import { create } from "zustand";

type GalleryArtworkUploadTypes = {
  image: File | null;
  setImage: (img: File | null) => void;
};

export const galleryArtworkUploadStore = create<GalleryArtworkUploadTypes>(
  (set, get) => ({
    image: null,
    setImage: (image: File | null) => set({ image }),
  })
);
