"use client";

export default function OrdersTab({ tab, setTab }: { tab: any; setTab: any }) {
  return (
    <div className="p-2 rounded-lg flex gap-2 bg-white ring-1 ring-dark/20 w-[300px]">
      {/* User */}
      <div
        className={`px-2 py-3 rounded-lg cursor-pointer w-full flex justify-center text-xs p-2 ${
          tab === "pending" ? "bg-dark  text-white" : "bg-transparent text-dark"
        }  cursor-pointer rounded-lg `}
        onClick={() => setTab("pending")}
      >
        <p>Pending orders</p>
      </div>
      {/* Gallery */}
      <div
        className={`px-2 py-3 rounded-lg cursor-pointer w-full flex text-xs justify-center p-2 ${
          tab === "history" ? "bg-dark  text-white" : "bg-transparent text-dark"
        }  cursor-pointer rounded-lg `}
        onClick={() => setTab("history")}
      >
        <p>Order history</p>
      </div>
    </div>
  );
}
