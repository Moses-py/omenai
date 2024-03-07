import React from "react";
import { history } from "../mocks";
import TransactionHistoryItem from "./TransactionHistoryItem";

export default function TransactionHistory() {
  return (
    <div className="border border-dark/10 rounded-xl p-5">
      <div>
        {history.map((item, index) => {
          return (
            <TransactionHistoryItem
              key={index}
              amount={item.amount}
              reference={item.reference}
              date={item.date}
              type={item.type}
              status={item.status}
            />
          );
        })}
      </div>
    </div>
  );
}
