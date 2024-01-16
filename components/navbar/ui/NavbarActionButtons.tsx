"use client";

import Link from "next/link";

export default function NavbarActionButtons() {
  return (
    <div className="flex flex-row sm:space-x-4 space-x-2 w-fit text-[12px] sm:text-[14px] ml-2">
      <Link
        href={"/auth/login/individual"}
        className="p-2 sm:px-5 rounded-sm font-medium bg-dark text-white"
      >
        Login
      </Link>

      <Link
        href={"/auth/register/individual"}
        className="p-2 sm:px-5 rounded-sm font-medium text-dark ring-1 ring-dark/30"
      >
        Sign up
      </Link>
    </div>
  );
}
