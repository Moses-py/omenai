"use client";

import Link from "next/link";

export default function NavbarActionButtons() {
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 w-fit text-base">
      <Link
        href={"/auth/login/individual"}
        className="py-1 px-5 rounded-sm bg-dark text-white"
      >
        Login
      </Link>

      <Link
        href={"/auth/register/individual"}
        className="py-1 px-5 rounded-sm text-dark ring-1 ring-dark/30"
      >
        Sign up
      </Link>
    </div>
  );
}
