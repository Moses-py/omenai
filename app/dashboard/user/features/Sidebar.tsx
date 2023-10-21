"use client";
import navigations from "@/app/dashboard/user/data/navigations.json";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { RowCard } from "./RowCard";

export const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="hidden md:block col-span-2 space-y-5">
      {navigations.map(({ image, label, href }, index) => (
        <RowCard
          key={index}
          image={image}
          label={label}
          isActive={pathname.startsWith(href)}
          onClick={() => router.push(href)}
        />
      ))}
    </div>
  );
};
