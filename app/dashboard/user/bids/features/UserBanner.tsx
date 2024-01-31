"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { CiUser } from "react-icons/ci";

export const UserBanner = () => {
  const session = useSession();

  const { logo } = session.data!.user;
  return (
    <div className="my-5 mx-5 lg:mx-0 flex items-center flex-col justify-center">
      <div className="py-[1.5rem] bg-gray-400 rounded-xl w-full xs:px-5 flex  xs:flex-row flex-col items-center justify-between">
        <div className="flex gap-3 items-center">
          <div className="p-2 xs:p-4 md:p-8 rounded-full bg-dark/5">
            <CiUser className="" />
          </div>

          <div className="">
            <p className="text-dark font-medium text-base">
              {session.data?.user.name}
            </p>
            <p className="text-dark/80 text-xs font-light">
              {session.data?.user.email}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-[1rem] xs:mt-0">
          <Image
            src="/icons/status.png"
            alt="icon"
            width={24}
            height={24}
            className=""
          />

          <p className="">
            Status:{" "}
            <span
              className={`${
                session.data?.user.verified ? "text-green-600" : "text-red-600"
              }`}
            >
              {session.data?.user.verified ? "Verified" : "Not verified"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
