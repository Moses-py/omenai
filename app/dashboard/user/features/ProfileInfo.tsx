"use client";
import { useMenuCardStore } from "@/store/menu_card/MenuCardStore";
import { signOut } from "next-auth/react";
import Image from "next/image";

export const ProfileInfo = () => {
  const { setIsOpen, isOpen } = useMenuCardStore();

  return (
    <div className="flex justify-between border-b lg:border-b-0 border-line p-2 ">
      <div className="flex items-center ">
        <div className="h-full w-[5px] rounded-lg bg-primary"></div>

        <div className="pl-3">
          <p className="text-sm text-black">Hello, Johnathan Wick</p>
          <p className="text-gray-200 text-base font-light">Welcome back</p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => signOut({})}
        className="hidden md:flex bg-gray-300 text-gray-200 rounded-full h-fit p-2 px-4"
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
