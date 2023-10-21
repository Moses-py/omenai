import { create } from "zustand";

type MenuCardStoreTypes = {
  isOpen: boolean;
  setIsOpen: (value?: boolean) => void;
};

export const useMenuCardStore = create<MenuCardStoreTypes>((set, get) => ({
  isOpen: false,
  setIsOpen: (value) => {
    const openState = get().isOpen;

    if (typeof value === "boolean") set({ isOpen: value });
    else set({ isOpen: !openState });
  },
}));
