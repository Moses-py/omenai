"use client";
import { galleryModalStore } from "@/store/gallery/gallery_modals/GalleryModals";
import { RxCross1 } from "react-icons/rx";
export default function SubscriptionStatus() {
  const [updateOpenModal] = galleryModalStore((state) => [
    state.updateOpenModal,
  ]);
  return (
    <div className="w-full px-5">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h4 className="text-dark text-base">Subscription status</h4>
          <p className="text-green-400">Active</p>
        </div>
        <div className="flex justify-between items-center">
          <h4 className="text-dark text-base">Subscription package tier</h4>
          <p className="text-dark text-base underline">Premium</p>
        </div>
      </div>

      <div className="mt-6">
        <button
          className="px-10 py-3 rounded-full bg-primary flex gap-2 items-center"
          onClick={() => updateOpenModal()}
        >
          <RxCross1 className="text-sm text-white" />
          <span className="text-white">Cancel subscription</span>
        </button>
      </div>
    </div>
  );
}
