"use client";
import { useMenuCardStore } from "@/store/user/user_menu_card/MenuCardStore";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

export const ProfileInfo = () => {
  const session = useSession();

  const { setIsOpen, isOpen } = useMenuCardStore();

  return (
    <div className="flex justify-between border-b border-line p-2 ">
      <div className="flex items-center ">
        <div className="h-full w-[5px] rounded-lg bg-primary"></div>

        <div className="pl-3">
          <h3 className="text-base xs:text-sm text-base-theme">
            Hello, {session.data?.user.name}
          </h3>
          <p className="text-base-theme text-base font-light">Welcome back</p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => signOut({})}
        className="hidden md:flex bg-gray-300 text-base-theme rounded-full h-fit p-2 px-4"
      >
        <Image
          src={"/icons/logout.png"}
          alt="logout icon"
          width={24}
          height={24}
          className="shrink-0 mr-2"
        />
        Logout
      </button>
      <button
        type="button"
        className="md:hidden rounded-full h-fit w-fit p-2 my-auto"
        onClick={() => setIsOpen()}
      >
        <Image
          src={isOpen ? "/icons/close.png" : "/icons/menu.png"}
          alt="icon"
          width={24}
          height={24}
          className="hrink-0 mr-2"
        />
      </button>
    </div>
  );
};
