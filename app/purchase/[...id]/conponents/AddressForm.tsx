"use client";
import { Checkbox, Label } from "flowbite-react";
import AddressTextInput from "./AddressTextInput";

export default function AddressForm() {
  return (
    <>
      <div className="w-full my-[2rem]">
        <h1 className="text-sm mb-[2rem] font-medium">Shipping Information</h1>
        <div className="">
          <AddressTextInput
            placeholder={"Enter your full name"}
            label={"Full name"}
            name={"name"}
          />
          <AddressTextInput
            placeholder={"Enter your email address"}
            label={"Email address"}
            name={"email"}
          />
        </div>
        <div className="grid md:grid-cols-2">
          <AddressTextInput
            placeholder={"street, apt. suite number"}
            label={"Address line"}
            name={"address"}
          />
          <AddressTextInput
            placeholder={"e.g Lisbon"}
            label={"City"}
            name={"city"}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <AddressTextInput
            placeholder={"Country"}
            label={"Country"}
            name={"country"}
          />
          <AddressTextInput
            placeholder={"State"}
            label={"State"}
            name={"state"}
          />
          <AddressTextInput
            placeholder={"Zipcode"}
            label={"Zip"}
            name={"zip"}
          />
        </div>
        <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center mt-8">
          <div className="my-5">
            <div className="flex items-center gap-2">
              <input type="checkbox" name="save address" id="save_address" />
              <label htmlFor="age">Save my address</label>
            </div>
          </div>
          <div className="w-fit my-4">
            <button className="w-full px-5 bg-dark py-3 text-white text-base hover:bg-white hover:text-dark hover:border hover:border-dark hover:underline duration-300 grid place-items-center group">
              Request price quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
