export default function WalletBar() {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="">
        <h1 className="text-dark font-bold text-sm">Wallet balances</h1>
      </div>
      <div>
        <button className="bg-dark text-white rounded-md px-4 py-2">
          Make a withdrawal
        </button>
      </div>
    </div>
  );
}
