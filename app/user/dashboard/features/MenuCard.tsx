"use client";
import { useMenuCardStore } from "@/store/menu_card/MenuCardStore";
import React, { Fragment } from "react";
import { RowCard } from "./RowCard";

export const MenuCard = () => {
  const { setIsOpen, isOpen } = useMenuCardStore();
  return (
    <Fragment>
      {isOpen ? (
        <div
          className="fixed top-[61.0729px] bg-black/5 w-full h-full md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-[80%] h-full border border-line rounded-r-[30px] bg-[#FCFCFC] px-6 py-10 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <RowCard
              image="/icons/profile.png"
              label="Profile information"
              isActive
            />

            <RowCard image="/icons/heart.png" label="Favorites" />
            <RowCard image="/icons/auction.png" label="Auction bids" />
            <RowCard image="/icons/history.png" label="Order history" />
            <RowCard image="/icons/setting.png" label="Settings" />
            <RowCard image="/icons/logout.png" label="Logout" />
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};
