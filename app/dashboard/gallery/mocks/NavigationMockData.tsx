import { TfiPackage } from "react-icons/tfi";
import { BsCreditCard2Front } from "react-icons/bs";
// import { RiAuctionLine } from "react-icons/ri";
import { IoAlbumsOutline, IoWalletOutline } from "react-icons/io5";

import {
  CiUser,
  CiSettings,
  CiLogout,
  CiGrid41,
  CiExport,
} from "react-icons/ci";

const overview = <CiGrid41 className="text-dark group-hover:text-white" />;
const order = <TfiPackage className="text-dark group-hover:text-white" />;
const subscription = (
  <BsCreditCard2Front className="text-dark group-hover:text-white" />
);
// const auction = <RiAuctionLine className="text-dark group-hover:text-white" />;
const upload = <CiExport className="text-dark group-hover:text-white" />;
const profile = <CiUser className="text-dark group-hover:text-white" />;
const settings = <CiSettings className="text-dark group-hover:text-white" />;
const logout = <CiLogout className="text-dark group-hover:text-white" />;
const album = <IoAlbumsOutline />;
const wallet = <IoWalletOutline className="text-dark group-hover:text-white" />;

export const navMockData: NavMockData = {
  general: [
    { title: "Overview", icon: overview, url: "/dashboard/gallery/overview" },
    { title: "Orders", icon: order, url: "/dashboard/gallery/orders" },
    {
      title: "Subscription",
      icon: subscription,
      url: "/dashboard/gallery/subscription",
    },
    {
      title: "My Wallet",
      icon: wallet,
      url: "/dashboard/gallery/wallet",
    },
    {
      title: "Upload artwork",
      icon: upload,
      url: "/dashboard/gallery/upload",
    },
    {
      title: "My artworks",
      icon: album,
      url: "/dashboard/gallery/artworks",
    },
  ],
  account: [
    {
      title: "Profile management",
      icon: profile,
      url: "/dashboard/gallery/profile",
    },
    { title: "Settings", icon: settings, url: "/dashboard/gallery/settings" },
    { title: "Sign out", icon: logout, url: "/" },
  ],
};

type NavMockData = {
  general: NavMockDataItem[];
  account: NavMockDataItem[];
};

type NavMockDataItem = {
  title: string;
  icon: React.ReactNode;
  url: string;
};
