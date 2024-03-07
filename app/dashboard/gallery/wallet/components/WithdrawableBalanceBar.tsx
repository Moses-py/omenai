"use client";
import Lottie from "lottie-react";
import animationData from "@/json/piechart.json";
import { IoIosInformationCircle } from "react-icons/io";
import { Tooltip } from "flowbite-react";

export default function WithdrawableBalanceBar() {
  return (
    <div className="p-5 rounded-full border border-dark/20 flex space-x-2 relative items-center w-full">
      <Lottie
        animationData={animationData}
        className="w-[50px] h-[50px]"
        loop={false}
      />
      <div className="flex flex-col">
        <div className="flex space-x-2 items-center">
          <p className="text-[14px] lg:text-base">Withdrawable balance</p>
          <Tooltip
            style="dark"
            animation="duration-500"
            className="text-[0.85rem] p-2 w-[300px]"
            content={
              "This represents the current withdrawable balance in your wallet, contingent upon the total value of orders that have been shipped to buyers with provided tracking information."
            }
          >
            <IoIosInformationCircle className="text-sm cursor-pointer" />
          </Tooltip>
        </div>

        <h1 className="text-base lg:text-sm font-bold">$14,546.43</h1>
      </div>
    </div>
  );
}
