import { RiAuctionLine } from "react-icons/ri";
import WalletBar from "./components/WalletBar";
import Balances from "./components/Balances";
import TransactionHistory from "./components/TransactionHistory";

export default function page() {
  return (
    <div className="w-full p-5">
      <WalletBar />
      <div className="my-5">
        <Balances />
      </div>
      <div className="mt-[5rem]">
        <h1 className="text-dark font-bold text-sm mb-5">
          Transaction history
        </h1>

        <TransactionHistory />
      </div>
    </div>
  );
}
