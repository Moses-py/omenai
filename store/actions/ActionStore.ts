import { create } from "zustand";

type ActionStoreTypes = {
  recoveryModal: {
    type: RouteIdentifier;
    value: boolean;
  };
  updateRecoveryModal: (label: RouteIdentifier) => void;
  openSideNav: boolean;
  updateOpenSideNav: (val: boolean) => void;
  filterModal: boolean;
  toggleFilterModal: (value: boolean) => void;
  openLoginModal: boolean;
  toggleLoginModal: (value: boolean) => void;
  openLoginModalRecoveryForm: boolean;
  toggleLoginModalRecoveryForm: (value: boolean) => void;
};

export const actionStore = create<ActionStoreTypes>((set, get) => ({
  recoveryModal: {
    type: "individual",
    value: false,
  },
  updateRecoveryModal: (label: RouteIdentifier) => {
    const modalState = get().recoveryModal;
    set({ recoveryModal: { type: label, value: !modalState.value } });
  },
  openSideNav: false,
  updateOpenSideNav: (val: boolean) => {
    set({ openSideNav: val });
  },
  filterModal: false,
  toggleFilterModal: (value: boolean) => {
    set({ filterModal: value });
  },

  openLoginModal: false,
  toggleLoginModal: (value: boolean) => {
    set({ openLoginModal: value });
  },
  openLoginModalRecoveryForm: false,
  toggleLoginModalRecoveryForm: (value: boolean) => {
    set({ openLoginModalRecoveryForm: value });
  },
}));
