"use client";
import Loader from "@/components/loader/Loader";
import { checkLockStatus } from "@/services/orders/checkLockStatus";
import { createOrderLock } from "@/services/orders/createOrderLock";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Tooltip } from "flowbite-react";
import { notFound, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CiLock } from "react-icons/ci";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import LoaderAnimation from "@/components/loader/LoaderAnimation";

export default function PayNowButton({ art_id }: { art_id: string }) {
  const router = useRouter();
  const session = useSession();
  const [loading, setLoading] = useState(false);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    const checkLock = async () => {
      const lock_status = await checkLockStatus(art_id, session.data!.user.id);
      if (lock_status?.isOk) {
        setLocked(lock_status.data.locked);
      } else {
        throw new Error("Something went wrong, please try again");
      }
    };

    checkLock();
  }, [art_id, session.data]);

  async function handleClickPayNow() {
    setLoading(true);
    const lock = await createOrderLock(art_id, session.data!.user.id);
    if (lock?.isOk) {
      if (lock.data.lock_data.user_id === session.data!.user.id) {
        router.replace("/payment/paymentPortal");
      } else {
        toast.error(
          "A user is currently processing a purchase transaction on this artwork. Please check back in a few minutes for a status update"
        );
      }
      setLoading(false);
    } else {
      throw new Error("An error has occured");
    }
  }

  return (
    <div className="w-full grid place-items-center h-full">
      <div className="space-y-4 text-center w-full flex flex-col items-center">
        <div className="w-fit relative">
          <Tooltip
            content={
              "Another user has initiated a payment transaction on this artwork. Please refresh your page in a few minutes to check status"
            }
            style="dark"
            animation="duration-500"
            trigger="hover"
            className={`w-[400px] bg-dark text-[0.9rem] text-white p-2 relative ${
              !locked && "hidden"
            }`}
          >
            <button
              onClick={handleClickPayNow}
              disabled={locked || loading}
              className="w-fit px-5 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-dark disabled:border-dark bg-dark py-3 text-white text-base hover:bg-white hover:text-dark disabled:hover:border-none hover:border-dark hover:border duration-150 grid place-items-center group"
            >
              {loading ? (
                <LoaderAnimation theme="dark" />
              ) : (
                "Proceed to payment"
              )}
            </button>
          </Tooltip>
          {locked && <CiLock className="absolute right-[-15px] top-[-5px]" />}
        </div>

        <p className="font-bold text-red-600 lg:w-1/2">
          <span className="text-[1.15rem] uppercase underline">
            Please note:
          </span>
          <br /> In order to prevent multiple transaction attempts for this
          artwork, we have implemented a queueing system and lock mechanism
          which prevents other users from accessing the payment portal if a user
          is currently in the process of paying for the artwork. In a case where
          you are unable to access the payment portal, please refresh your page
          after a few minutes and we&apos;ll let you know if the artwork is
          still available for purchase.
        </p>
      </div>
    </div>
  );
}
