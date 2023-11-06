import Image from "next/image";
import React from "react";

export default function BillingCard() {
  return (
    <div className="rounded-xl bg-billing-card bg-center bg-cover bg-no-repeat bg-blend-overlay p-8 relative ">
      <div className="absolute inset-0 bg-black/70 rounded-xl" />
      {/* Icon */}
      <div className="flex flex-col gap-y-6 relative z-10 mb-16">
        <Image
          src="/images/wifi.png"
          alt="mastercard logo"
          height={30}
          width={30}
          className="rotate-[-90deg]"
        />
        <p className="text-sm text-white">**** **** **** 1234</p>
      </div>

      <div className="flex flex-col justify-between gap-4  relative z-10">
        {/* Card num */}

        {/* Card info */}
        <div className="flex justify-between items-center">
          <div className="flex gap-x-12 items-end">
            <div className="flex flex-col gap-1">
              <span className="text-base font-light text-white">
                Card holder
              </span>
              <p className="text-normal text-sm font-normal text-white">
                Louvre museum
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-base font-light text-white">Expires</span>
              <p className="text-normal text-sm font-normal text-white">
                11/12
              </p>
            </div>
          </div>

          <div className="self-end">
            <Image
              src="/images/mastercard.png"
              alt="mastercard logo"
              height={50}
              width={80}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
