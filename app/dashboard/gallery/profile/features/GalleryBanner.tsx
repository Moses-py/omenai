"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";

export const UserBanner = () => {
  const session = useSession();

  const { logo } = session.data!.user;
  return (
    <div className="my-5 mx-5 lg:mx-0 flex items-center flex-col justify-center">
      <Image
        src={"/images/1.jpg"}
        alt="user banner"
        width={6000}
        height={4000}
        className="w-full h-[200px] object-fill object-center rounded-2xl overflow-hidden"
      />

      <div className="py-[1.5rem] bg-gray-400 rounded-xl w-[95%] -mt-10 xs:px-5 flex  xs:flex-row flex-col items-center justify-between">
        <div className="flex gap-3">
          <Image
            src={logo !== "" ? logo : "/logo/avatar.png"}
            alt="user avatar"
            width={45}
            height={45}
            className="rounded-2xl overflow-hidden"
          />

          <div className="">
            <p className="text-dark font-normal text-base">
              {session.data?.user.name}
            </p>
            <p className="text-dark text-xs font-light">
              {session.data?.user.location}
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
                session.data?.user.gallery_verified
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {session.data?.user.gallery_verified
                ? "Verified"
                : "Not verified"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
