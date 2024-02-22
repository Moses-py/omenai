"use client";

export default function OrdersTab({ tab, setTab }: { tab: any; setTab: any }) {
  return (
    <div className="p-2 rounded-lg flex gap-2 bg-white ring-1 ring-dark/20 w-auto">
      {/* User */}
      <div
        className={`p-2 rounded-lg cursor-pointer w-full flex justify-center text-xs ${
          tab === "pending" ? "bg-dark  text-white" : "bg-transparent text-dark"
        }  cursor-pointer rounded-lg `}
        onClick={() => setTab("pending")}
      >
        <p>Pending</p>
      </div>
      {/* Gallery */}
      <div
        className={` rounded-lg cursor-pointer w-full flex text-xs justify-center p-2 ${
          tab === "history" ? "bg-dark  text-white" : "bg-transparent text-dark"
        }  cursor-pointer rounded-lg `}
        onClick={() => setTab("history")}
      >
        <p>History</p>
      </div>
    </div>
  );
}
