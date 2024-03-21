"use client";

import LoaderAnimation from "@/components/loader/LoaderAnimation";
import { cancelSubscription } from "@/services/subscriptions/cancelSubscription";
import { galleryModalStore } from "@/store/gallery/gallery_modals/GalleryModals";
import { formatISODate } from "@/utils/formatISODate";
import { Modal } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoWarning } from "react-icons/io5";
import { toast } from "sonner";
export default function CancelSubscriptionModal({
  sub_end,
  id,
}: {
  sub_end: string;
  id: string;
}) {
  const router = useRouter();
  const [openModal, updateOpenModal] = galleryModalStore((state) => [
    state.openModal,
    state.updateOpenModal,
  ]);

  const [loading, setLoading] = useState(false);

  const cancel_subscription = async () => {
    setLoading(true);
    const response = await cancelSubscription(id);

    if (response?.isOk) {
      setLoading(false);
      toast.success(response.message);
      updateOpenModal();
      router.refresh();
    }
  };

  return (
    <>
      <Modal dismissible show={openModal} onClose={() => updateOpenModal()}>
        <div className=" p-10">
          <div className="flex flex-col gap-4 font-normal text-[15px]">
            <h2 className="text-red-600 text-md font-semibold">
              You are about to cancel your subscription.
            </h2>
            <p>
              Your current subscription will remain active till{" "}
              <span className="font-medium">{formatISODate(sub_end)}.</span> If
              you would like to proceed with canceling your subscription, please
              select “Cancel subscription” below.
            </p>

            {/* Warning block */}
            <div className="bg-[#FDF7EF] p-5 flex flex-col gap-3">
              <IoWarning className="text-md text-[#FFA500]" />
              <p>
                Are you sure?, After{" "}
                <span className="font-medium">{formatISODate(sub_end)}</span>,
                you will be unable to upload artworks and events or use any of
                the services provided by Omenai Inc. All artworks uploaded will
                be suspended until your subscriptions are restarted.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end mt-8">
            <div className="flex gap-3 text-[15px]">
              <button
                className="px-6 py-2 text-white bg-dark hover:bg-dark/60 duration-200"
                onClick={() => updateOpenModal()}
              >
                Quit
              </button>
              <button
                disabled={loading}
                className="px-6 py-2 text-white disabled:cursor-not-allowed bg-red-600 hover:bg-red-600/60 duration-200"
                color="gray"
                onClick={cancel_subscription}
              >
                {loading ? (
                  <LoaderAnimation theme="dark" />
                ) : (
                  "Cancel Subscription"
                )}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
