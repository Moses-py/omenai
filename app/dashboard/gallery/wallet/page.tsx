"use client";
import WalletBar from "./components/WalletBar";
import Balances from "./components/Balances";
import TransactionHistory from "./components/TransactionHistory";
import { useSession } from "next-auth/react";
import NoVerificationBlock from "../components/NoVerificationBlock";

export default function Wallet() {
  const session = useSession();
  return (
    <>
      {!session?.data?.user.gallery_verified ? (
        <NoVerificationBlock />
      ) : (
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
      )}
    </>
  );
}
