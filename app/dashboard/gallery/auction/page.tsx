import { RiAuctionLine } from "react-icons/ri";

export default function page() {
  return (
    <div className="w-full h-[80vh] grid place-items-center">
      <div className="flex flex-col items-center gap-4">
        <RiAuctionLine className="text-dark text-2xl" />
        <p>We are working hard to bring this feature to you. Stay tuned!</p>
      </div>
    </div>
  );
}
