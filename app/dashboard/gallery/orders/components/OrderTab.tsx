export default function OrderTab({tab, setTab}: {tab : any; setTab : any}) {
  
    return (
      <div className="p-2 rounded-lg bg-gray-400 flex gap-2 w-fit cursor-pointer text-center m-auto justify-center items-center">

        <div className={`rounded-lg p-2 w-48 h-10 ${
          tab === "pending" && "bg-dark text-white"
        }`}>
          <button onClick={() => setTab("pending")}>Pending</button>
        </div>

        <div className={`rounded-lg p-2 w-48 h-10 ${
          tab === "history" && "bg-dark text-white"
        }`}>
          <button onClick={() => setTab("history")}>History</button>
        </div>

    </div>
    );
  }