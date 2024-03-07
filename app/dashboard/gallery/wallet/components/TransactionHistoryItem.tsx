import Image from "next/image";

type TransactionHistoryItemTypes = {
  amount: string;
  reference: string;
  date: string;
  type: string;
  status: string;
};
export default function TransactionHistoryItem({
  amount,
  reference,
  date,
  type,
  status,
}: TransactionHistoryItemTypes) {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex gap-x-3 items-center">
          <div>
            <Image
              src={`/icons/${
                type === "Withdrawal" ? "withdraw.png" : "deposit.png"
              }`}
              height={30}
              width={30}
              alt="icon"
            />
          </div>
          <div className="space-y-1 text-[14px]">
            <h1 className="font-bold">Account {type.toLowerCase()}</h1>
            <p className="font-medium">
              Transaction reference:{" "}
              <span className="font-bold">{reference}</span>
            </p>
            <p className="font-medium">Transaction date: {date}</p>
          </div>
        </div>
        <div className="space-y-1 text-[14px]">
          <p className="font-bold">
            <span
              className={`${
                type === "Deposit" ? "text-green-600" : "text-red-600"
              }`}
            >
              {type === "Withdrawal" ? "-" : "+"}
              {amount}
            </span>
          </p>
          <p className="font-medium">{status}</p>
        </div>
      </div>
      <hr className="border-dark/10 my-3" />
    </>
  );
}
