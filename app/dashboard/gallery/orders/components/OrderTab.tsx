export default function OrderTab({ tab, setTab }: { tab: any; setTab: any }) {
  return (
    <div className="p-2 rounded-lg bg-gray-400 flex gap-2 w-[200px] py-0.8 px-0.8 cursor-pointer text-center m-auto justify-center items-center">
      <div
        className={`rounded-lg py-1.8 px-2 w-full p-2 ${
          tab === "pending" && "bg-dark text-white"
        }`}
        onClick={() => setTab("pending")}
      >
        <p>Pending</p>
      </div>

      <div
        className={`rounded-lg py-2 px-2 w-full p-2 ${
          tab === "history" && "bg-dark text-white"
        }`}
        onClick={() => setTab("history")}
      >
        <p>History</p>
      </div>
    </div>
  );
}
