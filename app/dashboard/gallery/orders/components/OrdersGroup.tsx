"use client";
import { Suspense, useState } from "react";
import Loader from "../../components/Loader";
import OrderHistory from "./OrderHistory";
import PendingOrders from "./PendingOrders";
import OrdersTab from "./OrdersTab";
import { ObjectId } from "mongoose";

export default function OrdersGroup({
  orders,
}: {
  orders: CreateOrderModelTypes[] & {
    createdAt: string;
    updatedAt: string;
    _id: ObjectId;
  };
}) {
  const [tab, setTab] = useState("pending");

  return (
    <>
      <div className="w-full p-10 grid place-items-center">
        <OrdersTab tab={tab} setTab={setTab} />
      </div>
      <div className="w-full h-full grid place-items-center container">
        {tab === "pending" ? (
          <Suspense fallback={<Loader />}>
            <PendingOrders orders={orders} />
          </Suspense>
        ) : (
          <Suspense fallback={<Loader />}>
            <OrderHistory orders={orders} />
          </Suspense>
        )}
      </div>
    </>
  );
}
