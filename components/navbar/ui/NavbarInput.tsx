"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function NavbarInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push(`/search?searchTerm=${searchTerm}`);
    }
  };
  return (
    <div className="relative flex-grow sm:mr-6 lg:mx-6">
      <input
        type="text"
        className="w-full py-1 px-3 border-0 ring-1 ring-dark/30 focus:border-0 focus:ring-dark rounded-sm placeholder:text-base placeholder:font-light"
        placeholder="Search by artwork or artist"
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <div className="absolute right-0 top-[50%] translate-y-[-50%] text-sm bg-white w-fit h-fit p-1">
        <CiSearch />
      </div>
    </div>
  );
}
