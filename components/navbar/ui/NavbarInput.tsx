"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { toast } from "sonner";

export default function NavbarInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (searchTerm === "") toast.error("Please include a search term");
      else router.push(`/search?searchTerm=${searchTerm}`);
    }
  };
  const handleIconTrigger = () => {
    if (searchTerm === "") toast.error("Please include a search term");
    else router.push(`/search?searchTerm=${searchTerm}`);
  };
  return (
    <div className="relative flex-grow sm:mr-6 lg:mx-6">
      <input
        type="text"
        className="w-full py-[0.3rem] px-3 border-0 ring-1 ring-dark/30 focus:border-0 focus:ring-dark rounded-sm placeholder:text-base placeholder:font-light"
        placeholder="Search by artwork or artist"
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <div
        className="absolute right-0 top-[50%] translate-y-[-50%] text-sm bg-dark text-white w-fit h-full py-1 px-3 cursor-pointer"
        onClick={handleIconTrigger}
      >
        <CiSearch />
      </div>
    </div>
  );
}
