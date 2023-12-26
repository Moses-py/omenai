import { create } from "zustand";

type ActionStoreTypes = {
  recoveryModal: {
    type: RouteIdentifier;
    value: boolean;
  };
  updateRecoveryModal: (label: RouteIdentifier) => void;
  openSideNav: boolean;
  updateOpenSideNav: (val: boolean) => void;
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
}));
