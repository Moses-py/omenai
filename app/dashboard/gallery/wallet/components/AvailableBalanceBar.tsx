"use client";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "@/json/wallet-white.json";
import { IoIosInformationCircle } from "react-icons/io";
import { useRef } from "react";
import { Tooltip } from "flowbite-react";

export default function AvailableBalanceBar() {
  const walletAnimation = useRef<LottieRefCurrentProps>(null);
  return (
    <div className="p-5 rounded-full bg-dark text-white flex space-x-2 relative items-center w-full">
      <Lottie
        animationData={animationData}
        className="w-[50px] h-[50px]"
        lottieRef={walletAnimation}
        onComplete={() => {
          walletAnimation.current?.goToAndStop(50, true);
        }}
        loop={false}
      />
      <div className="flex flex-col space-y-2">
        <div className="flex space-x-2 items-center">
          <p className="text-[14px] lg:text-base">Available balance</p>
          <Tooltip
            style="dark"
            animation="duration-500"
            className="text-[0.85rem] p-2 w-[300px]"
            content={
              "Upon purchase of an artwork, funds are transferred to your wallet. Once you've shipped the artwork and provided tracking information, you'll be able to withdraw the sale proceeds."
            }
          >
            <IoIosInformationCircle className="text-sm cursor-pointer" />
          </Tooltip>
        </div>

        <h1 className="text-base lg:text-sm font-bold">$24,163.53</h1>
      </div>
    </div>
  );
}
