"use client";

import Link from "next/link";

export default function NavbarActionButtons() {
  return (
    <div className="flex flex-row sm:space-x-4 space-x-2 w-fit text-[0.9rem] sm:text-[14px] ml-2">
      <Link
        href={"/auth/login/individual"}
        className="px-2 py-2 sm:px-5 rounded-sm font-medium hover:bg-dark/80 bg-dark text-white duration-300"
      >
        Login
      </Link>

      <Link
        href={"/auth/register/individual"}
        className="px-2 py-2 sm:px-5 rounded-sm font-medium hover:bg-dark/10 text-dark ring-1 ring-dark/10 duration-300"
      >
        Sign up
      </Link>
    </div>
  );
}
