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

export default function PayNowButton({ art_id }: { art_id: string }) {
  const queryClient = useQueryClient();
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
  }, []);

  const { mutateAsync: updateLockStatus } = useMutation({
    mutationFn: async (options: { art_id: string; user_id: string }) => {
      await createOrderLock(options.art_id, options.user_id);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["load_order_purchase_data"],
      });
    },
  });

  async function handleClickPayNow() {
    setLoading(true);
    const isOrderStillLocked = await checkLockStatus(
      art_id,
      session.data!.user.id
    );
    if (isOrderStillLocked?.isOk) {
      if (isOrderStillLocked.data.locked) {
        toast.error(
          "Sorry, another user is currently performing a payment transaction on this artwork"
        );
        setLoading(false);
        router.refresh();
      } else {
        await updateLockStatus({
          art_id: art_id,
          user_id: session.data!.user.id,
        });
        setLoading(false);
        router.replace("/payment/paymentPortal");
      }
    } else {
      throw new Error("An error was encountered");
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
              {loading ? <Loader theme="dark" /> : "Proceed to payment"}
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
