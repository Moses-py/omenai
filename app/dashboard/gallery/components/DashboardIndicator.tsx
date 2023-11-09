"use client";

import { galleryDummyVerification } from "@/store/gallery/gallery_dummy_verification/GalleryDummyVerification";
import { usePathname } from "next/navigation";
import { RiAdminLine } from "react-icons/ri";

export default function DashboardIndicator() {
  const [open, updateOpen] = galleryDummyVerification((state) => [
    state.open,
    state.updateOpen,
  ]);
  const pathname = usePathname().split("/");
  const lastPath = pathname.at(-1);
  return (
    <div className="w-full flex justify-between items-center">
      <div className="text-xs xs:text-base">
        <p className="font-normal text-base-theme">
          Louvre museum&apos;s dashboard
        </p>
        <p className="text-base-theme">
          <span className="font-light">Gallery</span>/
          <span className="font-normal capitalize text-primary">
            {lastPath}
          </span>
        </p>
      </div>
      {/* Request verification */}
      {!open ? (
        <div className="" id="gallery-verification">
          <button className="px-3 py-2 bg-dark text-white rounded-lg hover:bg-dark/90">
            Request gallery verification
          </button>
        </div>
      ) : (
        <div className="flex gap-2 items-center">
          <RiAdminLine className="text-lg font-light text-base-theme" />
          <div>
            <p className="text-primary font-normal">Johnathan wick</p>
            <p className="text-base-theme">Louvre d&apos;museum</p>
          </div>
        </div>
      )}
    </div>
  );
}
