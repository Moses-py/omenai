"use client";

import { useQuery } from "@tanstack/react-query";
import PricingCardFeatureListItem from "./PricingCardFeatureListItem";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import LoaderAnimation from "@/components/loader/LoaderAnimation";
import { useSession } from "next-auth/react";
import { useLocalStorage } from "usehooks-ts";
import { getApiUrl } from "@/config";

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
  const [loading, setLoading] = useState(false);
  const [redirect_uri, set_redirect_uri] = useLocalStorage(
    "redirect_uri_on_login",
    ""
  );
  const url = getApiUrl();
  const router = useRouter();
  const session = useSession();
  async function handleSubscribe() {
    if (
      session?.data?.user === undefined ||
      (session.data.user && session.data?.user.role !== "gallery")
    ) {
      set_redirect_uri(`${url}/gallery/pricing`);
      toast.error("Please login to your gallery account");
      router.push("/auth/login/gallery");
    } else {
      setLoading(true);
      const response = await fetch("/api/subscriptions/subscribeUser", {
        method: "POST",
        body: JSON.stringify({
          email: session.data.user.email,
          name: session.data.user.name,
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        toast.error(result.message);
        setLoading(false);
      } else {
        toast.success("Payment link generated...redirecting");
        const link = result.data.link;
        setLoading(false);
        router.push(link);
      }
    }
  }

  return (
    <div className="w-fit rounded-lg text-dark border border-dark/20 shadow-sm">
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
            onClick={handleSubscribe}
            className={`bg-primary rounded-md w-full py-2 grid place-items-center disabled:bg-gray-400 disabled:text-dark disabled:cursor-pointer text-white`}
          >
            {loading ? <LoaderAnimation theme="dark" /> : "Subscribe"}
          </button>
        </div>
      </div>
      {/* Divider */}
      <hr className="border-dark/20" />

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
