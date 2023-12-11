import { create } from "zustand";

type EditorialAdminStore = {
  open: boolean;
  setOpen: (val?: boolean) => void;
  openMobileNav: boolean;
  setOpenMobileNav: () => void;
  editorialData: EditorialFormData;
  updateEditorialData: (label: string, value: string) => void;
  clearData: () => void;
  cover: File | undefined;
  setCover: (value: File | undefined) => void;
};

export const editorialAdminStore = create<EditorialAdminStore>((set, get) => ({
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

  editorialData: {
    title: "",
    summary: "",
    slug: "",
    minutes: "",
    content: "",
  },
  updateEditorialData: (label: string, value: string | File | null) => {
    const data: Record<string, string | string[] | File | null> =
      get().editorialData;

    if (label in data) {
      const updatedData = { ...data, [label]: value };

      set({ editorialData: updatedData as EditorialFormData });
    }
  },
  cover: undefined,
  setCover: (value: File | undefined) => {
    set({ cover: value });
  },
  clearData: () => {
    set({
      editorialData: {
        title: "",
        summary: "",
        slug: "",
        minutes: "",
        content: "",
      },
      cover: undefined,
    });
  },
}));
