import Image from "next/image";
import React from "react";

export default function BillingCard({
  expiry,
  first_6digits,
  last_4digits,
  type,
}: {
  expiry: string;
  first_6digits: string;
  last_4digits: string;
  type: string;
}) {
  return (
    <div className="rounded-xl bg-billing-card bg-center bg-cover bg-no-repeat bg-blend-overlay px-8 py-4 relative lg:w-[800px] w-full">
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
        <p className="text-base text-white">
          {first_6digits}** **** {last_4digits}
        </p>
      </div>

      <div className="flex flex-col justify-between gap-4  relative z-10">
        {/* Card num */}

        {/* Card info */}
        <div className="flex justify-between items-center">
          <div className="flex gap-x-12 items-end">
            <div className="flex flex-col gap-1">
              <span className="text-base font-light text-white">
                Expiry date
              </span>
              <p className="text-normal text-base font-normal text-white">
                {expiry}
              </p>
            </div>
          </div>

          <div className="self-end">
            <Image
              src={`/logo/${type.toLowerCase()}.png`}
              alt={`${type.toLowerCase()} logo`}
              height={50}
              width={80}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
