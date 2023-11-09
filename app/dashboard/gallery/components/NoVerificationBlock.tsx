"use client";
import { galleryDummyVerification } from "@/store/gallery/gallery_dummy_verification/GalleryDummyVerification";
import { BsShieldLock } from "react-icons/bs";
import { toast } from "sonner";
export default function NoVerificationBlock() {
  const [open, updateOpen] = galleryDummyVerification((state) => [
    state.open,
    state.updateOpen,
  ]);
  return (
    <div
      className={`absolute inset-0 ${
        open ? "hidden" : "grid"
      } bg-dark place-items-center rounded-lg`}
    >
      <div className="flex flex-col gap-4 items-center">
        <BsShieldLock className="text-2xl text-white" />
        <div className="text-center">
          <p className=" text-white">
            Your account is being verified, an agent will reach out to you
            within 24 hours.
          </p>
          <p className=" text-white">
            To expedite this process, please click the{" "}
            <b>&apos; Request gallery verification &apos;</b> button below{" "}
          </p>
        </div>
        <div className="">
          <button
            className="px-3 py-2 bg-white text-dark rounded-lg "
            onClick={() => {
              toast.success("Gallery verified");
              updateOpen();
            }}
          >
            Request gallery verification
          </button>
        </div>
      </div>
    </div>
  );
}
