"use client";
import { Checkbox, Label } from "flowbite-react";
import AddressTextInput from "./AddressTextInput";
import { userDetails, userLocation } from "../AddressInputFieldMocks";
import AddressSelectInput from "./AddressSelectInput";
import { orderStore } from "@/store/orders/ordersStore";
import { FormEvent, useState } from "react";
import { useSession } from "next-auth/react";
import { indexAddress } from "../indexAddressOptions";
import { createShippingOrder } from "@/services/orders/createShippingOrder";
import { toast } from "sonner";
import Loader from "@/components/loader/Loader";

type AddressFormTypes = {
  userAddress: IndividualAddressTypes;
  gallery_id: string;
  art_id: string;
};
export default function AddressForm({
  userAddress,
  gallery_id,
  art_id,
}: AddressFormTypes) {
  const [address] = orderStore((state) => [state.address]);
  const [loading, setLoading] = useState<boolean>(false);
  const [save_shipping_address, setSaveShippingAddress] =
    useState<boolean>(false);
  const session = useSession();

  async function handleOrderSubmission(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    let shipping_address;
    if (userAddress.address_line === "") shipping_address = address;
    else shipping_address = userAddress;

    const createdShippingOrder = await createShippingOrder(
      session.data!.user.id,
      art_id,
      gallery_id,
      save_shipping_address,
      shipping_address
    );

    if (createdShippingOrder === undefined) {
      toast.error(
        "An error was encountered while trying to create your order, please try again"
      );
      setLoading(false);
    } else {
      toast.success(
        "Order successfully created. We'll get back to you within 24 to 48 hrs"
      );
      setLoading(false);
    }
  }

  return (
    <>
      <div className="w-full my-[2rem]">
        <h1 className="text-sm mb-[2rem] font-medium">Shipping Information</h1>
        <form onSubmit={handleOrderSubmission}>
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
                  onChange={(e) => setSaveShippingAddress(e.target.checked)}
                />
                <label htmlFor="age">Save my address</label>
              </div>
            </div>
            <div className="w-fit my-4">
              <button
                disabled={loading}
                type="submit"
                className="w-full px-5 disabled:cursor-not-allowed disabled:bg-white disabled:border disabled:border-dark bg-dark py-3 text-white text-base hover:bg-white hover:text-dark hover:border hover:border-dark hover:underline duration-300 grid place-items-center group"
              >
                {!loading ? "Request price quote" : <Loader theme="dark" />}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
