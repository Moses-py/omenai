"use client";
import { IndividualLogo } from "@/components/logo/Logo";
import NavigationItem from "../components/NavigationItem";
import { navMockData } from "../mocks/NavigationMockData";
import { galleryNavigationActions } from "@/store/gallery_navigation/GalleryNavigation";
import { TfiClose } from "react-icons/tfi";

export default function MobilePageLayout() {
  const [openMobileNav, setOpenMobileNav] = galleryNavigationActions(
    (state) => [state.openMobileNav, state.setOpenMobileNav]
  );
  return (
    <div
      className={`gap-4 w-full bg-black/10 absolute h-full ${
        openMobileNav ? "left-0" : "left-[-100%]"
      } left-0 duration-200 md:hidden flex justify-between`}
    >
      <div
        className={` h-screen w-72 ${
          openMobileNav ? "opacity-1" : "opacity-0"
        } p-5 pt-4 duration-500 delay-200 border-r bg-white border-r-base-theme/20`}
      >
        <div className="flex flex-col">
          <div className={` duration-200 w-full`}>
            <IndividualLogo />
          </div>

          {/* Nav items */}
          <div className="flex flex-col gap-y-8 mt-6">
            {/* General navigation */}
            <div>
              <h4 className={`text-base-theme font-medium text-xs `}>
                General
              </h4>
              <ul className="flex flex-col gap-y-1">
                {navMockData.general.map((item, index) => {
                  return (
                    <NavigationItem
                      title={item.title}
                      icon={item.icon}
                      key={index}
                      url={item.url}
                      mobile={true}
                      onClick={() => setOpenMobileNav()}
                    />
                  );
                })}
              </ul>
            </div>
            {/* Account pages */}
            <div>
              <h4 className={`text-base-theme font-medium text-xs`}>Account</h4>
              <ul className="flex flex-col gap-y-1">
                {navMockData.account.map((item, index) => {
                  return (
                    <NavigationItem
                      title={item.title}
                      icon={item.icon}
                      key={index}
                      url={item.url}
                      mobile={true}
                      onClick={() => setOpenMobileNav()}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
          {/* Help box */}
          {/* <div className={` $ duration-200 px-4 `}>
          <Help />
        </div> */}
        </div>

        {/* Nav logo */}
      </div>
      {/* Close button */}
      <div
        onClick={() => setOpenMobileNav()}
        className="p-3 bg-white w-fit h-fit my-2 rounded-md mr-5"
      >
        <TfiClose>close</TfiClose>
      </div>
    </div>
  );
}
