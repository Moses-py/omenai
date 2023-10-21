import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoSearch } from "react-icons/io5";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-5 lg:px-10 py-2">
      {/* logo */}

      <Link href="/" className="">
        <Image
          src={"/logo.svg"}
          alt="logo"
          width={120}
          height={30}
          className="ml-5"
        />
      </Link>

      {/* menu */}

      <ul className="flex items-center gap-8">
        {navigations.map(({ name }, index) => (
          <li key={index} className="">
            <Link href="#" className="text-base text-black font-light">
              {name}
            </Link>
          </li>
        ))}
      </ul>

      {/* search */}

      <SearchCard />
    </nav>
  );
};

const SearchCard = () => {
  return (
    <div className="border-b border-[#9D9D9D] flex items-center shrink-0">
      <input
        type="text"
        className="text-gray-light p-2 text-base font-light border-0 outline-none flex-1"
        placeholder="Search by artist, artwork, gallery, etc..."
      />

      <div className="">
        <IoSearch className="text-gray-light" />
      </div>
    </div>
  );
};

const navigations = [
  {
    name: "Galleries",
    href: "/galleries",
  },
  {
    name: "Editorial",
    href: "/editorial",
  },
  {
    name: "Artworks",
    href: "/artworks",
  },
  {
    name: "Auctions",
    href: "/auctions",
  },
  {
    name: "Fairs",
    href: "/fairs",
  },
];
