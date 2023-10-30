"use client";

import { galleryNavigationActions } from "@/store/gallery_navigation/GalleryNavigation";
import { CiMenuFries } from "react-icons/ci";
import DashboardIndicator from "./DashboardIndicator";
import IconWrapper from "./IconWrapper";

export default function Appbar() {
  const [openMobileNav, setOpenMobileNav] = galleryNavigationActions(
    (state) => [state.openMobileNav, state.setOpenMobileNav]
  );
  return (
    <>
      <div className="flex justify-between items-center w-full md:px-5">
        <DashboardIndicator />
        <IconWrapper onClick={() => setOpenMobileNav()}>
          <CiMenuFries
            className={`${openMobileNav ? "hidden" : "false"} block md:hidden`}
          />
        </IconWrapper>
      </div>
    </>
  );
}
