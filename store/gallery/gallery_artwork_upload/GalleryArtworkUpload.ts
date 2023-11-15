import { create } from "zustand";

type GalleryArtworkUploadTypes = {
  image: File | null;
  setImage: (img: File | null) => void;
  artworkUploadData: ArtworkUploadStateTypes;
  updateArtworkUploadData: (label: string, value: string) => void;
  clearData: () => void;
};

export const galleryArtworkUploadStore = create<GalleryArtworkUploadTypes>(
  (set, get) => ({
    image: null,
    setImage: (image: File | null) => set({ image }),
    artworkUploadData: {
      artist: "",
      year: "",
      title: "",
      medium: "",
      rarity: "",
      materials: "",
      width: "",
      height: "",
      price: "",
      shouldShowPrice: "",
      depth: "",
    },
    updateArtworkUploadData: (label: string, value: string) => {
      const data: Record<string, any> = get().artworkUploadData;

      if (label in data) {
        const updatedData = { ...data, [label]: value };

        set({
          artworkUploadData: updatedData as ArtworkUploadStateTypes,
        });
      }
    },
    clearData: () => {
      set({
        artworkUploadData: {
          artist: "",
          year: "",
          title: "",
          medium: "",
          rarity: "",
          materials: "",
          width: "",
          height: "",
          price: "",
          shouldShowPrice: "",
          depth: "",
        },
      });
      set({ image: null });
    },
  })
);
