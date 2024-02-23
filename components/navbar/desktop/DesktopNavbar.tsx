"use client";
import { IndividualLogo } from "../../logo/Logo";
import NavbarLink from "../ui/NavbarLink";
import NavbarInput from "../ui/NavbarInput";
import NavbarActionButtons from "../ui/NavbarActionButtons";
import { CiMenuFries } from "react-icons/ci";
import MobileNavbar from "../mobile/MobileNavbar";
import { actionStore } from "@/store/actions/ActionStore";
import { useSession } from "next-auth/react";
import LoggedInUser from "../ui/LoggedInUser";
export default function DesktopNavbar() {
  const [updateOpenSideNav] = actionStore((state) => [state.updateOpenSideNav]);
  const session = useSession();

  return (
    <div className="sticky top-0 bg-white z-30">
      <nav
        className="pt-5 px-4 lg:px-8 text-base text-black font-medium "
        id="navbar"
      >
        <div className="flex justify-between items-center">
          <IndividualLogo />
          <div className="lg:hidden block">
            <CiMenuFries onClick={() => updateOpenSideNav(true)} />
          </div>
          <MobileNavbar />

          <ul className="lg:flex space-x-6 hidden">
            <NavbarLink
              disabled={false}
              text={"Buy artworks"}
              link={"/catalog"}
            />
            <NavbarLink
              disabled={false}
              text={"Omenai for galleries"}
              link={"/dashboard/gallery/overview"}
            />
            <NavbarLink
              disabled={false}
              text={"Pricing for galleries"}
              link={"/gallery/pricing"}
            />
            <NavbarLink
              disabled={false}
              text={"Omenai shop"}
              link={"https://omenai.shop"}
            />
            <NavbarLink
              disabled={false}
              text={"Omenai editorials"}
              link={"/articles"}
            />
          </ul>
        </div>
        <div className="flex items-center justify-between my-2">
          {/* Links */}
          <ul className="hidden lg:flex space-x-6 w-fit">
            <NavbarLink disabled={true} text={"Artists"} link={"/"} />
            <NavbarLink disabled={false} text={"Artworks"} link={"/catalog"} />
            <NavbarLink disabled={true} text={"Auctions"} link={"/"} />
            <NavbarLink disabled={true} text={"Fairs"} link={"/"} />
            <NavbarLink disabled={true} text={"Shows"} link={"/"} />
          </ul>
          {/* Search bar */}
          <NavbarInput />
          {/* Action buttons */}
          {session.status === "authenticated" &&
            session.data.user.role === "user" && (
              <div className="">
                <LoggedInUser user={session.data?.user.name} />
              </div>
            )}
          {((session.data && session.data.user.role === "gallery") ||
            session.status === "unauthenticated") && (
            <div className="">
              <NavbarActionButtons />
            </div>
          )}
        </div>
      </nav>
      <hr className="border-dark/10" />
    </div>
  );
}
