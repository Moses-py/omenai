"use client";

import Loader from "@/components/loader/Loader";
import LoaderAnimation from "@/components/loader/LoaderAnimation";
import { declineOrderRequest } from "@/services/orders/declineOrderRequest";
import { updateOrderTrackingData } from "@/services/orders/updateTrackingInformation";
import { actionStore } from "@/store/actions/ActionStore";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";

export default function ProvideOrderRejectionModalForm() {
  const [toggleDeclineOrderModal, current_order_id] = actionStore((state) => [
    state.toggleDeclineOrderModal,
    state.current_order_id,
  ]);
  const [accepted_status, setAcceptedStatus] =
    useState<OrderAcceptedStatusTypes>({
      status: "declined",
      reason: "",
    });
  const [loading, setLoading] = useState(false);

  function handleInputChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setAcceptedStatus((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const router = useRouter();

  const handleSubmitTrackingInfo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const response = await declineOrderRequest(
      accepted_status,
      current_order_id
    );
    if (!response?.isOk) {
      toast.error(response?.message);
      setLoading(false);
    } else {
      setLoading(false);
      toast.success(response.message);
      toggleDeclineOrderModal(false);
      router.refresh();
    }
  };

  return (
    <div>
      <h1 className="text-sm font-bold mb-4">Uh oh! That&apos;s so sad</h1>
      <form className="w-full" onSubmit={handleSubmitTrackingInfo}>
        <div className="space-y-2 mb-2 flex flex-col w-full">
          <div className="relative w-full h-auto">
            <label htmlFor="shipping">Is there a reason for this?</label>
            <input
              onChange={handleInputChange}
              name="reason"
              type="text"
              required
              placeholder="Please indicate a reason why this order has been declined"
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
            {loading ? <LoaderAnimation theme="dark" /> : " Decline order"}
          </button>
        </div>
      </form>
    </div>
  );
}
