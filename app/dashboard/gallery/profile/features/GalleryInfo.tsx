"use client";
import Image from "next/image";
import { FormCard } from "./components/FormCard";
import LogoPickerModal from "./components/LogoPickerModal";
import { galleryLogoUpdate } from "@/store/gallery/gallery_logo_upload/GalleryLogoUpload";
export default function GalleryInfo() {
  const [updateModal] = galleryLogoUpdate((state) => [state.updateModal]);
  return (
    <div>
      <LogoPickerModal />
      <div
        className="flex gap-3 items-center my-5 cursor-pointer"
        onClick={() => updateModal(true)}
      >
        <div className="h-[60px] w-[60px] rounded-full bg-[#eee] flex items-center justify-center">
          <Image
            src="/icons/profile.png"
            alt="icon"
            width={24}
            height={24}
            className=""
          />
        </div>
        <p className="text-base-theme px-5 lg:px-2 underline">
          Edit profile logo
        </p>
      </div>

      <FormCard />
    </div>
  );
}
