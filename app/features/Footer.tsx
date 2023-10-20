/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

type Props = {};
export const Footer = (props: Props) => {
  return (
    <footer className="page-center ">
      <div className="bg-[#391035] p-5 lg:p-10 lg:pb-5">
        <Link href="/" className="">
          <img src="/logo-white.svg" alt="" className="w-auto h-[30px]" />
        </Link>

        <div className="grid grid-cols-2 lg:grid-cols-5 mt-8 gap-5">
          {sections.map(({ items, title }, index) => (
            <div key={index} className="">
              <p className="font-medium text-sm text-white">{title}</p>

              <ul className="space-y-5 mt-8">
                {items.map(({ name }, i) => (
                  <li key={i} className="text-white text-base">
                    <Link href="#">{name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="px-5 lg:px-10 flex items-center justify-center gap-3 divide-x divide-black mt-10">
          {items.map((item, index) => (
            <p key={index} className="text-base text-white pl-2">
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="px-5 lg:px-10 flex items-center justify-center gap-3 divide-x divide-black py-2">
        {bottom_items.map((item, index) => (
          <p key={index} className="text-base text-black pl-2">
            {item}
          </p>
        ))}
      </div>
    </footer>
  );
};

const sections = [
  {
    title: "About us",
    items: [
      {
        name: "Careers",
        href: "/careers",
      },
      {
        name: "Mission",
        href: "/mission",
      },
      {
        name: "Vision",
        href: "/vision",
      },
      {
        name: "Contact",
        href: "/contact",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        name: "Careers",
        href: "/careers",
      },
      {
        name: "Mission",
        href: "/mission",
      },
      {
        name: "Vision",
        href: "/vision",
      },
      {
        name: "Contact",
        href: "/contact",
      },
    ],
  },
  {
    title: "Partnerships",
    items: [
      {
        name: "Careers",
        href: "/careers",
      },
      {
        name: "Mission",
        href: "/mission",
      },
      {
        name: "Vision",
        href: "/vision",
      },
      {
        name: "Contact",
        href: "/contact",
      },
    ],
  },
  {
    title: "Support",
    items: [
      {
        name: "Careers",
        href: "/careers",
      },
      {
        name: "Mission",
        href: "/mission",
      },
      {
        name: "Vision",
        href: "/vision",
      },
      {
        name: "Contact",
        href: "/contact",
      },
    ],
  },
  {
    title: "Social",
    items: [
      {
        name: "Facebook",
        href: "https://facebook.com/",
      },
      {
        name: "Twitter",
        href: "https://twitter.com/",
      },
      {
        name: "Instagram",
        href: "https://instaram.com/",
      },
      {
        name: "LinkedIn",
        href: "https://linkedin.com/",
      },
    ],
  },
];

const items = ["Contact", "Newsletter", "Publications", "Instagram", "Twitter"];
const bottom_items = [
  "2023 Omenai Terms of use",
  "Privacy",
  "Security",
  "Conditions of sale",
  "Buyer’s guarantee",
  "Seller’s agreement",
  "Do not sell my personal information",
];
