"use client";
import navigations from "@/app/dashboard/user/data/navigations.json";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { RowCard } from "./RowCard";

export const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-5">
      {navigations.map(({ image, label, href }, index) => (
        <RowCard
          key={index}
          image={image}
          label={label}
          isActive={pathname.startsWith(href)}
          route={href}
        />
      ))}
    </div>
  );
};
