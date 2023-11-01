"use client";
import { IndividualLogo } from "@/components/logo/Logo";
import { BsArrowLeftShort } from "react-icons/bs";
import { navMockData } from "../mocks/NavigationMockData";
import NavigationItem from "../components/NavigationItem";
import { galleryNavigationActions } from "@/store/gallery_navigation/GalleryNavigation";

export default function PageLayout() {
  const [open, setOpen] = galleryNavigationActions((state) => [
    state.open,
    state.setOpen,
  ]);

  return (
    <div
      className={` h-screen hidden fixed left-0 top-0 sm:block ${
        open ? "xl:w-72 md:w-56" : "w-24"
      } p-5 pt-8 duration-200 border-r border-r-base-theme/10`}
    >
      <BsArrowLeftShort
        onClick={() => setOpen()}
        className={`bg-white  text-md absolute -right-3 top-9 z-50 border border-1 border-base-theme/20  cursor-pointer rounded-full ${
          !open && "rotate-180"
        } duration-200 `}
      />

      <div className="flex flex-col">
        <div className={`${!open && "w-fit"} duration-200 w-full`}>
          <IndividualLogo />
        </div>

        {/* Nav items */}
        <div className="flex flex-col gap-y-8 mt-12">
          {/* General navigation */}
          <div>
            <h4 className={`text-base-theme font-medium ${!open && "text-xs"}`}>
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
                    mobile={false}
                  />
                );
              })}
            </ul>
          </div>
          {/* Account pages */}
          <div>
            <h4 className={`text-base-theme font-medium ${!open && "text-xs"}`}>
              Account
            </h4>
            <ul className="flex flex-col gap-y-1">
              {navMockData.account.map((item, index) => {
                return (
                  <NavigationItem
                    title={item.title}
                    icon={item.icon}
                    key={index}
                    url={item.url}
                    mobile={false}
                  />
                );
              })}
            </ul>
          </div>
        </div>
        {/* Help box */}
      </div>

      {/* Nav logo */}
    </div>
  );
}
