"use client";

import PricingCardFeatureListItem from "./PricingCardFeatureListItem";

type PricingCardItemProps = {
  plan: string;
  price: string;
  features: string[];
  duration?: string;
  description?: string;
};
export default function PricingCardItem({
  plan,
  price,
  duration,
  description,
  features,
}: PricingCardItemProps) {
  return (
    <div className="w-full rounded-lg text-dark border border-base-theme/20 shadow-sm">
      {/* Plan name and popularity tag (optional) */}
      <div className="p-8 w-full flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <p className="font-medium">{plan} plan</p>
          {/* <div className="border border-primary rounded-full px-2 py-[0.1rem]">
            <span className="text-xs text-primary font-normal">popular</span>
          </div> */}
        </div>
        {/* Plan price */}
        <div className="w-full flex gap-1 items-center">
          <p className="text-xl font-bold">{price}</p>
          <p className="text-base">{duration}</p>
        </div>
        {/* Plan description if applicable */}
        <div className="w-full">
          <p className="font-light text-xs">{description}</p>
        </div>
        {/* Action buttons */}
        <div className="flex flex-col gap-4 w-full">
          <button
            disabled={plan === "Free"}
            className={`bg-primary rounded-md w-full py-2 disabled:bg-gray-400 disabled:text-dark disabled:cursor-pointer text-white`}
          >
            {plan === "Free" ? "Active" : "Subscribe"}
          </button>
          {plan !== "Free" && (
            <button className="bg-white border border-base-theme/30 rounded-md w-full py-2">
              Contact sales team
            </button>
          )}
        </div>
      </div>
      {/* Divider */}
      <hr className="border-base-theme/20" />

      {/* Features */}
      <div className="flex-col flex gap-2 p-8">
        <h6 className="font-medium text-sm">Features</h6>
        <span className="text-xs font-light">
          Everything in the <span className="font-medium">{plan}</span> plan
          plus...
        </span>
        <div className="w-full mt-4">
          <ul className="flex flex-col gap-3 list-none">
            {features.map((feature, index) => {
              return (
                <PricingCardFeatureListItem
                  key={index}
                  feature_title={feature}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
