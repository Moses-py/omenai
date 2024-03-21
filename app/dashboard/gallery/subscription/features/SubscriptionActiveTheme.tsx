"use client";
import { useQuery } from "@tanstack/react-query";
import BillingCard from "./components/BillingCard";
import BillingInfo from "./components/BillingInfo";
import CancelSubscriptionModal from "./components/CancelSubscriptionModal";
import SubscriptionStatus from "./components/SubscriptionStatus";
import { retrieveSubscriptionData } from "@/services/subscriptions/retriveSubscriptionData";
import { useSession } from "next-auth/react";
import Loader from "@/components/loader/Loader";

export default function SubscriptionActiveTheme() {
  const session = useSession();
  const { data: subscription_data, isLoading } = useQuery({
    queryKey: ["get_sub_data"],
    queryFn: async () => {
      const response = await retrieveSubscriptionData(session.data!.user.email);
      if (response?.isOk) {
        return response.data;
      }
    },
  });

  if (isLoading) {
    return (
      <div className="h-[85vh] w-full grid place-items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      {/* Card */}
      <div className="flex lg:flex-row flex-col gap-4 items-start">
        <BillingCard
          expiry={subscription_data.sub_card_info.expiry}
          first_6digits={subscription_data.sub_card_info.first_6digits}
          last_4digits={subscription_data.sub_card_info.last_4digits}
          type={subscription_data.sub_card_info.type}
        />
        <BillingInfo
          sub_start={subscription_data.sub_start_date}
          sub_end={subscription_data.sub_expiry_date}
        />
      </div>
      <SubscriptionStatus sub_status={subscription_data.sub_status} />
      <CancelSubscriptionModal
        sub_end={subscription_data.sub_expiry_date}
        id={subscription_data.customer.email}
      />
    </div>
  );
}
