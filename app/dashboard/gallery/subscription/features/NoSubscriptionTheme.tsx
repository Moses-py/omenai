import Link from "next/link";
import { GoPlus } from "react-icons/go";
export default function NoSubscriptionTheme() {
  return (
    <div className=" w-full h-[80vh] grid place-items-center">
      <div className="flex flex-col gap-3">
        <h5>No subscriptions plans are active</h5>
        <Link href={"/gallery/pricing"} className="">
          <button className="px-10 py-3 rounded-full bg-primary flex gap-2 items-center">
            <GoPlus className="text-sm text-white" />
            <span className="text-white">Add a subscription</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
