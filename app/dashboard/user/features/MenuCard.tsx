"use client";
import navigations from "@/app/dashboard/user/data/navigations.json";
import { useMenuCardStore } from "@/store/menu_card/MenuCardStore";
import { signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { Fragment } from "react";
import { RowCard } from "./RowCard";
import { IndividualLogo } from "@/components/logo/Logo";

export const MenuCard = () => {
  const { setIsOpen, isOpen } = useMenuCardStore();
  const pathname = usePathname();
  return (
    <Fragment>
      <div
        className={`fixed top-[9.5%] ${
          isOpen ? "left-0" : "left-[-100%]"
        } bg-black/5 transition-all duration-200 ease-linear w-full h-full md:hidden`}
        onClick={() => setIsOpen()}
      >
        <div
          className="w-[80%] h-full border border-line bg-gray-800 px-6 py-10 space-y-5"
          onClick={(e) => e.stopPropagation()}
        >
          {/* <div className="w-full grid place-items-center mb-[2rem]">
            <IndividualLogo />
          </div> */}

          <div className="flex flex-col gap-[1rem]">
            {navigations.map(({ image, label, href }, index) => (
              <RowCard
                key={index}
                image={image}
                label={label}
                isActive={pathname.startsWith(href)}
                route={href}
                onClick={() => setIsOpen()}
              />
            ))}
          </div>

          <RowCard
            image={"/icons/logout.png"}
            label="Logout"
            onClick={() => signOut({})}
          />
        </div>
      </div>
    </Fragment>
  );
};
