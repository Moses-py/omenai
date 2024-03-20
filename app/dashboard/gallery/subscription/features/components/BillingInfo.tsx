"use client";
import { useSession } from "next-auth/react";
import { formatISODate } from "@/utils/formatISODate";

export default function BillingInfo({
  sub_start,
  sub_end,
}: {
  sub_start: string;
  sub_end: string;
}) {
  const session = useSession();
  return (
    <div className="p-4 border border-dark/20 rounded-lg w-full ml-0">
      <h4 className="text-dark text-base md:text-[1.1rem] font-bold mb-5">
        Billing information
      </h4>
      <div className="flex flex-col gap-2 text-[16px]">
        {/* <h4 className="text-sm">{session.data?.user.name}</h4> */}
        <p>
          Gallery name:{" "}
          <span className="font-bold">{session.data?.user.name}</span>{" "}
        </p>
        <p>
          Email address:{" "}
          <span className="font-bold">{session.data?.user.email}</span>{" "}
        </p>
        <p>
          Gallery ID: <span className="font-bold">{session.data?.user.id}</span>{" "}
        </p>
        <p>
          Billing start period:{" "}
          <span className="font-bold">{formatISODate(sub_start)}</span>{" "}
        </p>
        <p>
          Next billing period:{" "}
          <span className="font-bold">{formatISODate(sub_end)}</span>{" "}
        </p>
      </div>
    </div>
  );
}
