"use client";

import { usePathname } from "next/navigation";
import { RiAdminLine } from "react-icons/ri";
type AppbarTypes = {
  admin_name?: string;
};
export default function DashboardIndicator({ admin_name }: AppbarTypes) {
  const pathname = usePathname().split("/");
  const lastPath = pathname.at(-1);
  return (
    <div className="w-full flex justify-between items-center">
      <div className="text-xs xs:text-base">
        <p className="text-dark">
          <span className="font-light">Editorial dashboard</span> /{" "}
          <span className="font-normal capitalize text-primary">
            {lastPath!.toLowerCase()}
          </span>
        </p>
      </div>
      {/* Request verification */}

      <div className="flex gap-2 items-center">
        <RiAdminLine className="text-sm font-light text-dark" />
        <div>
          <p className="text-primary font-normal">Iyanu Omenai</p>
        </div>
      </div>
    </div>
  );
}
