"use client";

import { useSession } from "next-auth/react";
import { CiUser } from "react-icons/ci";

type BannerProps = {
  user: string;
  email: string;
};
export default function Banner() {
  const user = useSession();
  return (
    <>
      <div className="flex justify-between items-center px-2 sm:px-5 py-5">
        <div className="flex gap-x-1 items-center">
          <div className="p-2 xs:p-4 md:p-8 rounded-full bg-dark/5">
            <CiUser className="" />
          </div>

          <div>
            <h1 className="text-base sm:text-sm md:text-md font-bold">
              {user.data?.user.name}
            </h1>
            <p className="text-xs sm:text-base font-light">
              {user.data?.user.email}
            </p>
          </div>
        </div>
        <div className="">
          <button className="px-2 py-1 sm:px-4 sm:py-2 md:px-5 md:py-3 rounded-full border text-xs border-dark hover:border-dark/30">
            Logout
          </button>
        </div>
      </div>
      {/* <hr /> */}
    </>
  );
}
