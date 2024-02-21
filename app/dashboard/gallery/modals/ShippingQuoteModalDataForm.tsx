"use client";

import Loader from "@/components/loader/Loader";
import LoaderAnimation from "@/components/loader/LoaderAnimation";
import { updateShippingQuote } from "@/services/orders/updateShippingQuote";
import { actionStore } from "@/store/actions/ActionStore";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { toast } from "sonner";

export default function ShippingQuoteModalDataForm() {
  const [galleryOrderActionModalData, toggleGalleryOrderActionModal] =
    actionStore((state) => [
      state.galleryOrderActionModalData,
      state.toggleGalleryOrderActionModal,
    ]);
  const [quoteData, setQuoteData] = useState<ShippingQuoteTypes>({
    package_carrier: "",
    shipping_fees: "",
    taxes: "",
    additional_information: "",
  });
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  function handleInputChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setQuoteData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  const handleSubmitQuoteFees = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const response = await updateShippingQuote(
      quoteData,
      galleryOrderActionModalData.order_id
    );
    if (!response?.isOk) {
      toast.error(response?.message);
      setLoading(false);
    } else {
      setLoading(false);
      toast.success(response.message);
      toggleGalleryOrderActionModal(false);
      router.refresh();
    }
  };

  return (
    <div>
      <h1 className="text-sm font-bold mb-4">Buyer address information</h1>
      <div className="font-medium text-dark space-y-2 text-base">
        <p>Name: {galleryOrderActionModalData.buyer}</p>
        <p>
          Address line:{" "}
          {galleryOrderActionModalData.shipping_address.address_line}
        </p>
        <p>City: {galleryOrderActionModalData.shipping_address.city}</p>
        <p>State: {galleryOrderActionModalData.shipping_address.state}</p>
        <p>Country: {galleryOrderActionModalData.shipping_address.country}</p>
        <p>Zipcode: {galleryOrderActionModalData.shipping_address.zip}</p>
      </div>
      <hr className="border-dark/30 my-4" />
      <div className="mb-5">
        <h1 className="text-sm font-bold mb-4">Shipping Quote</h1>
        <p>
          Please provide a shipping quote and all relevant taxes based on the
          buyer&apos;s information above
        </p>
      </div>

      <form className="w-full" onSubmit={handleSubmitQuoteFees}>
        <div className="space-y-2 mb-2 flex flex-col w-full">
          <div className="relative w-full h-auto">
            <label htmlFor="shipping">Package carrier</label>
            <input
              onChange={handleInputChange}
              name="package_carrier"
              type="text"
              required
              placeholder="e.g DHL, USPS, UPS, etc..."
              className="px-3 py-2 border border-dark/20 rounded-md w-full focus:border-none focus:ring-1 focus:ring-dark focus:outline-none"
            />
          </div>
        </div>
        <div className="space-y-2 mb-2 flex flex-col w-full">
          <div className="relative w-full h-auto">
            <label htmlFor="shipping">Shipping fees ($)</label>
            <input
              onChange={handleInputChange}
              name="shipping_fees"
              type="text"
              required
              className="px-3 py-2 border border-dark/20 rounded-md w-full focus:border-none focus:ring-1 focus:ring-dark focus:outline-none"
            />
            <BsCurrencyDollar className="absolute right-3 top-9" />
          </div>
        </div>
        <div className="space-y-2 mb-2 flex flex-col w-full">
          <label htmlFor="shipping">Taxes and other fees ($)</label>
          <div className="relative w-full h-auto">
            <input
              onChange={handleInputChange}
              name="taxes"
              type="text"
              required
              className="px-3 py-2 border border-dark/20 rounded-md w-full focus:border-none focus:ring-1 focus:ring-dark focus:outline-none"
            />
            <BsCurrencyDollar className="absolute right-3 top-3" />
          </div>
        </div>
        <div className="space-y-2 my-2 flex flex-col w-full">
          <label htmlFor="shipping">Additional information (optional)</label>
          <div className="relative w-full h-auto">
            <textarea
              onChange={handleInputChange}
              name="additional_information"
              rows={3}
              className="px-3 py-2 border border-dark/20 rounded-md w-full focus:border-none focus:ring-1 focus:ring-dark focus:outline-none"
            />
          </div>
        </div>
        <div className="w-full flex justify-end items-end mt-5">
          <button
            disabled={loading}
            type="submit"
            className="px-4 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-400 hover:bg-green-800 rounded-md bg-green-600 duration-300 grid place-items-center"
          >
            {loading ? (
              <LoaderAnimation theme="dark" />
            ) : (
              " Accept order request"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
