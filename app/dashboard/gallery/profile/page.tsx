import React from "react";
import { UserBanner } from "./features/GalleryBanner";
import GalleryInfo from "./features/GalleryInfo";

export default function page() {
  return (
    <div>
      <UserBanner />
      <p className="text-base-theme text-base xs:text-sm font-normal pt-8 px-5 lg:px-2">
        Profile
      </p>

      <GalleryInfo />
    </div>
  );
}
