"use client";
import { Checkbox, Label } from "flowbite-react";
import AddressTextInput from "./AddressTextInput";
import { userDetails, userLocation } from "../AddressInputFieldMocks";
import AddressSelectInput from "./AddressSelectInput";
import { orderStore } from "@/store/orders/ordersStore";
import { FormEvent } from "react";
import { useSession } from "next-auth/react";
import { indexAddress } from "../indexAddressOptions";

type AddressFormTypes = {
  userAddress: IndividualAddressTypes;
};
export default function AddressForm({ userAddress }: AddressFormTypes) {
  const [address] = orderStore((state) => [state.address]);
  const session = useSession();

  return (
    <>
      <div className="w-full my-[2rem]">
        <h1 className="text-sm mb-[2rem] font-medium">Shipping Information</h1>
        <form
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            console.log(address);
          }}
        >
          <div className="">
            {userDetails.map((detail, index) => {
              return (
                <AddressTextInput
                  key={index}
                  placeholder={detail.placeholder}
                  label={detail.label}
                  name={detail.name}
                  type={detail.type}
                  required={detail.required}
                  disabled={true}
                  defaultValue={
                    detail.name === "name"
                      ? session.data!.user.name
                      : session.data!.user.email
                  }
                />
              );
            })}
          </div>
          <div className="grid md:grid-cols-2">
            {userLocation.map((location: any, index: number) => {
              if (location.type === "select" && !location.placeholder) {
                return (
                  <AddressSelectInput
                    key={index}
                    label={location.label}
                    name={location.name}
                    required={location.required}
                    items={location.items}
                  />
                );
              } else if (location.placeholder) {
                return (
                  <AddressTextInput
                    key={index}
                    placeholder={location.placeholder}
                    label={location.label}
                    name={location.name}
                    type={location.type}
                    required={location.required}
                    defaultValue={indexAddress(location.name, userAddress)}
                  />
                );
              }
            })}
          </div>

          <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center mt-8">
            <div className="my-5">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="save address"
                  id="save_address"
                  onChange={(e) => console.log(e.target.checked)}
                />
                <label htmlFor="age">Save my address</label>
              </div>
            </div>
            <div className="w-fit my-4">
              <button
                type="submit"
                className="w-full px-5 bg-dark py-3 text-white text-base hover:bg-white hover:text-dark hover:border hover:border-dark hover:underline duration-300 grid place-items-center group"
              >
                Request price quote
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
