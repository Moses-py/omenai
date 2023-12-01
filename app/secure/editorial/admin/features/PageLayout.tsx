"use client";
import { IndividualLogo } from "@/components/logo/Logo";
import { BsArrowLeftShort } from "react-icons/bs";
import { signOut } from "next-auth/react";
import { toast } from "sonner";

import { editorialAdminNavigations } from "../store/EditorialAdminNavigations";
import NavigationItem from "./NavigationItem";
import { editorialNavMockData } from "../mocks/NavigationMockData";

export default function PageLayout() {
  const [open, setOpen] = editorialAdminNavigations((state) => [
    state.open,
    state.setOpen,
  ]);

  function handleSignout() {
    signOut({ callbackUrl: "/auth/login/gallery" });
    toast.success("Successfully signed out...redirecting");
  }

  return (
    <div
      className={` h-screen hidden fixed left-0 top-0 sm:block ${
        open ? "xl:w-72 md:w-56" : "w-24"
      } p-5 pt-8 duration-200 border-r border-r-dark bg-dark`}
    >
      <div
        className="bg-white absolute -right-3 top-9 z-[100] border border-1 border-dark  cursor-pointer rounded-full w-fit"
        id="expand"
      >
        <BsArrowLeftShort
          onClick={() => setOpen()}
          className={`text-md  ${!open && "rotate-180"} duration-200 `}
        />
      </div>

      <div className="flex flex-col">
        <div className={`${!open && "w-fit"} duration-200 w-full`}>
          <IndividualLogo />
        </div>

        {/* Nav items */}
        <div className="flex flex-col gap-y-8 mt-12" id="navigation-items">
          {/* General navigation */}
          <div>
            <ul className="flex flex-col gap-y-1">
              {editorialNavMockData.map((item: any, index: any) => {
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
        </div>
      </div>
    </div>
  );
}
