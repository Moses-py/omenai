"use client";

import { usePathname } from "next/navigation";

export default function DashboardIndicator() {
  const pathname = usePathname().split("/");
  const lastPath = pathname.at(-1);
  return (
    <div className="text-xs xs:text-base">
      <p className="font-semibold text-base-theme">
        Louvre museum&apos;s dashboard
      </p>
      <p className="text-base-theme">
        <span className="font-light">Gallery</span>/
        <span className="font-semibold capitalize text-primary">
          {lastPath}
        </span>
      </p>
    </div>
  );
}
