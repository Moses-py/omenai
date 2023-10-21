/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {};
export const UserImage = (props: Props) => {
  return (
    <div className="my-5 mx-5 lg:mx-0 flex items-center flex-col justify-center">
      <div className="h-[150px] rounded-2xl overflow-hidden w-full">
        <img
          src="/images/0d18a68a68b46a499cbf5a78126d31fc.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="h-[70px] bg-gray-400 rounded-xl w-[95%] -mt-10 px-5 flex items-center justify-between">
        <div className="flex gap-3">
          <Avatar image="/images/58c10e001b87b62387f583fc59601928.jpeg" />

          <div className="">
            <p className="text-black text-base">Johnathan Wick</p>
            <p className="text-gray-200 text-xs font-light">San fransisco</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img src="/icons/status.png" alt="" className="h-6 w-6" />

          <p className="">
            Status: <span className="text-red-500">Incomplete</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const Avatar = ({ image }: { image: string }) => {
  return (
    <div className="h-[45px] w-[45px] rounded-2xl overflow-hidden">
      <img src={image} alt="" className="h-full w-full object-cover" />
    </div>
  );
};
