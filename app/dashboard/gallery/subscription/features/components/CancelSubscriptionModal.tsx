"use client";

import { galleryModalStore } from "@/store/gallery/gallery_modals/GalleryModals";
import { Modal } from "flowbite-react";
import { IoWarning } from "react-icons/io5";
export default function CancelSubscriptionModal() {
  const [openModal, updateOpenModal] = galleryModalStore((state) => [
    state.openModal,
    state.updateOpenModal,
  ]);

  return (
    <>
      <Modal dismissible show={openModal} onClose={() => updateOpenModal()}>
        <div className=" p-10">
          <div className="flex flex-col gap-4 font-light">
            <h2 className="text-[#FFA500] text-md font-mormal">
              You are about to cancel your subscription.
            </h2>
            <p>
              Your current subscription will remain active till{" "}
              <span className="font-medium">November 14, 2023.</span> If you
              would like to proceed with canceling your subscription, please
              select “Cancel subscription” below.
            </p>

            {/* Warning block */}
            <div className="bg-[#FDF7EF] p-5 flex flex-col gap-3">
              <IoWarning className="text-md text-[#FFA500]" />
              <p>
                Are you sure?, After{" "}
                <span className="font-medium">November 14, 2023</span>, you will
                be unable to upload artworks and events or use any of the
                services provided by Omenai Inc. All artworks uploaded will be
                suspended until your subscriptions are restarted.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end mt-8">
            <div className="flex gap-3">
              <button
                className="px-6 py-2 text-white rounded-full bg-red-600 hover:bg-red-600/60 duration-200"
                onClick={() => updateOpenModal()}
              >
                Quit
              </button>
              <button
                className="px-6 py-2 text-white rounded-full bg-primary hover:bg-primary/60 duration-200"
                color="gray"
                onClick={() => updateOpenModal()}
              >
                Cancel Subscription
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
