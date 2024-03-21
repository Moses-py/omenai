"use client";
import { galleryModalStore } from "@/store/gallery/gallery_modals/GalleryModals";
import { RxCross1 } from "react-icons/rx";
export default function SubscriptionStatus({
  sub_status,
}: {
  sub_status: string;
}) {
  const [updateOpenModal] = galleryModalStore((state) => [
    state.updateOpenModal,
  ]);
  return (
    <div className="w-full px-5 mt-8">
      <div className="flex flex-col gap-6">
        <div className="flex space-x-4 items-center">
          <h4 className="text-dark text-base font-semibold">
            Subscription status:
          </h4>
          <p className="text-green-600 font-bold">Active</p>
        </div>
        <div className="flex space-x-4 items-center">
          <h4 className="text-dark text-base font-semibold">
            Subscription package tier:
          </h4>
          <p className=" text-base font-bold text-green-600">Premium</p>
        </div>
      </div>

      <div className="mt-6">
        {sub_status === "canceled" ? (
          <button className="px-4 py-2 rounded-md w-fit bg-dark hover:bg-dark/70 flex gap-2 items-center">
            Reactivate Subscription
          </button>
        ) : (
          <button
            className="px-4 py-2 rounded-md w-fit bg-red-600 flex gap-2 items-center"
            onClick={() => updateOpenModal()}
          >
            <RxCross1 className="text-sm text-white" />
            <span className="text-white">Cancel Subscription</span>
          </button>
        )}
      </div>
    </div>
  );
}
