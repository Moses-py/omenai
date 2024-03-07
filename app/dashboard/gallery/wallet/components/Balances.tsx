import AvailableBalanceBar from "./AvailableBalanceBar";
import WithdrawableBalanceBar from "./WithdrawableBalanceBar";

export default function Balances() {
  return (
    <div className="flex justify-between items-center gap-5">
      <AvailableBalanceBar />
      <WithdrawableBalanceBar />
    </div>
  );
}
