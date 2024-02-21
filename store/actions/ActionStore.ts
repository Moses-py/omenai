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
  openGalleryOrderActionModal: boolean;
  toggleGalleryOrderActionModal: (value: boolean) => void;
  openUploadTrackingInfoModal: boolean;
  toggleUploadTrackingInfoModal: (value: boolean) => void;
  openUserTrackingInfoModal: boolean;
  toggleUserTrackingInfoModal: (value: boolean) => void;
  openDeclineOrderModal: boolean;
  toggleDeclineOrderModal: (value: boolean) => void;
  openLoginModalRecoveryForm: boolean;
  toggleLoginModalRecoveryForm: (value: boolean) => void;
  selectedCountry: string;
  countryStates: string[];
  setSelectedCountry: (country: string) => void;
  setCountryStates: () => void;
  galleryOrderActionModalData: {
    buyer: string;
    shipping_address: IndividualAddressTypes;
    order_id: string;
  };
  updateGalleryOrderActionModalData: (
    buyer: string,
    shipping_address: IndividualAddressTypes,
    order_id: string
  ) => void;
  clearGalleryOrderActionModalData: () => void;
  current_order_id: string;
  update_current_order_id: (id: string) => void;
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

  openGalleryOrderActionModal: false,
  toggleGalleryOrderActionModal: (value: boolean) => {
    set({ openGalleryOrderActionModal: value });
  },

  openUploadTrackingInfoModal: false,
  toggleUploadTrackingInfoModal: (value: boolean) => {
    set({ openUploadTrackingInfoModal: value });
  },
  openUserTrackingInfoModal: false,
  toggleUserTrackingInfoModal: (value: boolean) => {
    set({ openUserTrackingInfoModal: value });
  },
  openDeclineOrderModal: false,
  toggleDeclineOrderModal: (value: boolean) => {
    set({ openDeclineOrderModal: value });
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

  galleryOrderActionModalData: {
    buyer: "",
    shipping_address: {
      address_line: "",
      city: "",
      country: "",
      state: "",
      zip: "",
    },
    order_id: "",
  },
  updateGalleryOrderActionModalData: (
    buyer: string,
    shipping_address: IndividualAddressTypes,
    order_id: string
  ) => {
    set({ galleryOrderActionModalData: { buyer, shipping_address, order_id } });
  },

  clearGalleryOrderActionModalData: () => {
    set({
      galleryOrderActionModalData: {
        buyer: "",
        shipping_address: {
          address_line: "",
          city: "",
          country: "",
          state: "",
          zip: "",
        },
        order_id: "",
      },
    });
  },

  current_order_id: "",
  update_current_order_id: (id: string) => {
    set({ current_order_id: id });
  },
}));
