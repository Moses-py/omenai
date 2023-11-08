"use client";

import { usePathname } from "next/navigation";

export default function DashboardIndicator() {
  const pathname = usePathname().split("/");
  const lastPath = pathname.at(-1);
  return (
    <div className="w-full flex justify-between items-center">
      <div className="text-xs xs:text-base">
        <p className="font-normal text-base-theme">
          Louvre museum&apos;s dashboard
        </p>
        <p className="text-base-theme">
          <span className="font-light">Gallery</span>/
          <span className="font-normal capitalize text-dark">{lastPath}</span>
        </p>
      </div>
      {/* Request verification */}
      <div className="">
        <button className="px-3 py-2 bg-dark text-white rounded-lg hover:bg-dark/90">
          Request gallery verification
        </button>
      </div>
    </div>
  );
}
