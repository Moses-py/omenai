import { country_and_states } from "@/app/purchase/[...id]/countryAndStateList";
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
  openOrderReceivedModal: boolean;
  toggleOrderReceivedModal: (value: boolean) => void;
  openLoginModalRecoveryForm: boolean;
  toggleLoginModalRecoveryForm: (value: boolean) => void;
  selectedCountry: string;
  countryStates: string[];
  setSelectedCountry: (country: string) => void;
  setCountryStates: () => void;
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
  openOrderReceivedModal: false,
  toggleOrderReceivedModal: (value: boolean) => {
    set({ openOrderReceivedModal: value });
  },
  openLoginModalRecoveryForm: false,
  toggleLoginModalRecoveryForm: (value: boolean) => {
    set({ openLoginModalRecoveryForm: value });
  },
  selectedCountry: "",
  setSelectedCountry: (country: string) => {
    set({ selectedCountry: country });
  },
  countryStates: [],
  setCountryStates: () => {
    const selectedCountry = get().selectedCountry;
    const country_states = country_and_states.find((countries) => {
      return countries.country === selectedCountry;
    });
    set({ countryStates: country_states?.states });
  },
}));
