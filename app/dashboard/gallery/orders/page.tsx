"use client";
import { useState } from "react";
import OrderTab from "./components/OrderTab";
import Pending from "./components/PendingPage";
import HistoryPage from "./components/HistoryPage";

export default function Orders() {
  const[tab, setTab] = useState("pending");
  return (
    <>
      <OrderTab tab={tab} setTab={setTab} />
      <div>{tab === "pending" ? <Pending /> : <HistoryPage />}</div>
    </>
  );
}
