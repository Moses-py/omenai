import BillingCard from "./components/BillingCard";
import BillingInfo from "./components/BillingInfo";
import CancelSubscriptionModal from "./components/CancelSubscriptionModal";
import SubscriptionStatus from "./components/SubscriptionStatus";

export default function SubscriptionActiveTheme() {
  return (
    <div className="w-full h-full">
      {/* Card */}
      <div className="grid lg:grid-cols-2 gap-y-12 items-center">
        <BillingCard />
        <SubscriptionStatus />
      </div>
      <BillingInfo />
      <CancelSubscriptionModal />
    </div>
  );
}
