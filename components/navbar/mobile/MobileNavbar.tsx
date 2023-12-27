"use client";

import { actionStore } from "@/store/actions/ActionStore";
import NavbarActionButtons from "../ui/NavbarActionButtons";
import NavbarLink from "../ui/NavbarLink";
import { IndividualLogo } from "@/components/logo/Logo";
import { TfiClose } from "react-icons/tfi";
export default function MobileNavbar() {
  const [openSideNav, updateOpenSideNav] = actionStore((state) => [
    state.openSideNav,
    state.updateOpenSideNav,
  ]);
  return (
    <div
      className={`h-screen w-full fixed z-40 bg-white top-0 ${
        openSideNav ? "left-0" : "left-[-100%]"
      } duration-300`}
    >
      <div className="flex justify-between items-center py-6 px-4">
        <IndividualLogo />
        <div className="lg:hidden block">
          <TfiClose onClick={() => updateOpenSideNav(false)} />
        </div>
      </div>
      <div className="my-4">
        <ul className="flex flex-col space-y-4 px-4">
          <NavbarLink disabled={false} text={"Buy artworks"} link={"/"} />
          <NavbarLink disabled={false} text={"Sell Artworks"} link={"/"} />
          <NavbarLink disabled={false} text={"View editorials"} link={"/"} />
        </ul>
        <hr className="border-dark/20 my-4" />
        <ul className="flex flex-col space-y-4 px-4 w-fit">
          <NavbarLink disabled={false} text={"Artists"} link={"/"} />
          <NavbarLink disabled={false} text={"Artworks"} link={"/"} />
          <NavbarLink disabled={true} text={"Auctions"} link={"/"} />
          <NavbarLink disabled={true} text={"Fairs"} link={"/"} />
          <NavbarLink disabled={true} text={"Shows"} link={"/"} />
        </ul>
      </div>

      <hr className="border-dark/20 mt-4" />
      <div className="p-4 sm:hidden block">
        <NavbarActionButtons />
      </div>
    </div>
  );
}
