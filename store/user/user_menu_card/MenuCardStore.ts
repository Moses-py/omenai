import { create } from "zustand";

type MenuCardStoreTypes = {
  isOpen: boolean;
  setIsOpen: () => void;
};

export const useMenuCardStore = create<MenuCardStoreTypes>((set, get) => ({
  isOpen: false,
  setIsOpen: () => {
    const openState = get().isOpen;

    set({ isOpen: !openState });
  },
}));
