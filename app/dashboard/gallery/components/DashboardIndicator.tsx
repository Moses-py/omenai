"use client";

import { galleryDummyVerification } from "@/store/gallery/gallery_dummy_verification/GalleryDummyVerification";
import { usePathname } from "next/navigation";
import { RiAdminLine } from "react-icons/ri";
type AppbarTypes = {
  admin_name?: string;
  gallery_name?: string;
  gallery_verified?: boolean;
};
export default function DashboardIndicator({
  admin_name,
  gallery_name,
  gallery_verified,
}: AppbarTypes) {
  const [open] = galleryDummyVerification((state) => [
    state.open,
    state.updateOpen,
  ]);
  const pathname = usePathname().split("/");
  const lastPath = pathname.at(-1);
  return (
    <div className="w-full flex justify-between items-center">
      <div className="text-xs xs:text-base">
        <p className="font-normal text-dark">{gallery_name} dashboard</p>
        <p className="text-dark">
          <span className="font-light">Gallery</span>/
          <span className="font-normal capitalize text-primary">
            {lastPath}
          </span>
        </p>
      </div>
      {/* Request verification */}
      {!gallery_verified ? (
        <div className="" id="gallery-verification">
          <button className="px-3 py-2 bg-dark text-white rounded-lg hover:bg-dark/90">
            Request gallery verification
          </button>
        </div>
      ) : (
        <div className="flex gap-2 items-center">
          <RiAdminLine className="text-lg font-light text-dark" />
          <div>
            <p className="text-primary font-normal">{admin_name}</p>
            <p className="text-dark">{gallery_name}</p>
          </div>
        </div>
      )}
    </div>
  );
}
