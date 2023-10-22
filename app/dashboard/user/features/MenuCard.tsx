"use client";
import navigations from "@/app/dashboard/user/data/navigations.json";
import { useMenuCardStore } from "@/store/menu_card/MenuCardStore";
import { signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { Fragment } from "react";
import { RowCard } from "./RowCard";

export const MenuCard = () => {
  const { setIsOpen, isOpen } = useMenuCardStore();
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Fragment>
      {isOpen ? (
        <div
          className="fixed top-[61.0729px] bg-black/5 w-full h-full md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-[80%] h-full border border-line rounded-r-[30px] bg-gray-800 px-6 py-10 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            {navigations.map(({ image, label, href }, index) => (
              <RowCard
                key={index}
                image={image}
                label={label}
                isActive={pathname.startsWith(href)}
                onClick={() => router.push(href)}
              />
            ))}

            <RowCard
              image={"/icons/logout.png"}
              label="Logout"
              onClick={() => signOut({})}
            />
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};
