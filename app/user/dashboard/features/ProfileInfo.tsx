/* eslint-disable @next/next/no-img-element */
"use client";
import { useMenuCardStore } from "@/store/menu_card/MenuCardStore";
import React, { Fragment } from "react";

export const ProfileInfo = () => {
  const { setIsOpen, isOpen } = useMenuCardStore();

  return (
    <div className="flex justify-between border-b lg:border-b-0 border-line p-2 ">
      <div className="flex items-center ">
        <div className="h-full w-[5px] rounded-lg bg-primary"></div>

        <div className="pl-3">
          <p className="text-sm text-black">Hello, Johnathan Wick</p>
          <p className="text-[#454545] text-base font-light">Welcome back</p>
        </div>
      </div>

      <button
        type="button"
        className="hidden md:flex bg-[#F6F6F6] text-[#454545] rounded-full h-fit p-2 px-4"
      >
        <img src="/icons/logout.png" alt="" className="h-6 w-6 shrink-0 mr-2" />
        Logout
      </button>
      <button
        type="button"
        className="md:hidden rounded-full h-fit w-fit p-2 my-auto"
        onClick={() => setIsOpen()}
      >
        <img
          src={isOpen ? "/icons/close.png" : "/icons/menu.png"}
          alt=""
          className="h-6 w-6 shrink-0 mr-2"
        />
      </button>
    </div>
  );
};
