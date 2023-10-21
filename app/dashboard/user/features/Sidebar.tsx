import React from "react";
import { RowCard } from "./RowCard";

export const Sidebar = () => {
  return (
    <div className="hidden md:block col-span-2 space-y-5">
      <RowCard
        image="/icons/profile.png"
        label="Profile information"
        isActive
      />
      <RowCard image="/icons/heart.png" label="Favorites" />
      <RowCard image="/icons/auction.png" label="Auction bids" />
      <RowCard image="/icons/history.png" label="Order history" />
      <RowCard image="/icons/setting.png" label="Settings" />
    </div>
  );
};
