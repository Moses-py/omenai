/* eslint-disable @next/next/no-img-element */
import { IndividualLogo } from "@/components/logo/Logo";
import { IoPersonCircleOutline } from "react-icons/io5";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-5 lg:px-10 py-5 border-b border-line">
      <IndividualLogo />

      <div className="flex items-center gap-3">
        <IoPersonCircleOutline className="h-10 w-10" />

        <div className="hidden xs:block">
          <p className="text-base-theme text-base font-normal font-sans">
            John Doe
          </p>
          <p className="text-base-theme text-xs font-light">
            Member since 2023
          </p>
        </div>
      </div>
    </nav>
  );
};
