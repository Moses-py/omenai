"use client";

import { galleryNavigationActions } from "@/store/gallery/gallery_navigation/GalleryNavigation";
import { CiMenuFries } from "react-icons/ci";
import DashboardIndicator from "./DashboardIndicator";
import IconWrapper from "./IconWrapper";

export default function Appbar() {
  const [openMobileNav, setOpenMobileNav] = galleryNavigationActions(
    (state) => [state.openMobileNav, state.setOpenMobileNav]
  );
  return (
    <>
      <div className="flex justify-between items-center w-full px-5  rounded-md sticky top-0 z-10 bg-white py-5 border-b border-base-theme/10 ">
        <DashboardIndicator />
        <IconWrapper
          onClick={() => setOpenMobileNav()}
          className={`${openMobileNav ? "hidden" : "false"} block md:hidden`}
        >
          <CiMenuFries />
        </IconWrapper>
      </div>
    </>
  );
}
