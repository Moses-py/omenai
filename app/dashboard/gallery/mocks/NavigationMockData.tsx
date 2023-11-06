import { TfiPackage } from "react-icons/tfi";
import { BsCreditCard2Front } from "react-icons/bs";
import { RiAuctionLine } from "react-icons/ri";
import {
  CiUser,
  CiSettings,
  CiLogout,
  CiGrid41,
  CiExport,
} from "react-icons/ci";

const overview = (
  <CiGrid41 className="text-base-theme group-hover:text-white" />
);
const order = <TfiPackage className="text-base-theme group-hover:text-white" />;
const subscription = (
  <BsCreditCard2Front className="text-base-theme group-hover:text-white" />
);
const auction = (
  <RiAuctionLine className="text-base-theme group-hover:text-white" />
);
const upload = <CiExport className="text-base-theme group-hover:text-white" />;
const profile = <CiUser className="text-base-theme group-hover:text-white" />;
const settings = (
  <CiSettings className="text-base-theme group-hover:text-white" />
);
const logout = <CiLogout className="text-base-theme group-hover:text-white" />;

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
      title: "Auction room",
      icon: auction,
      url: "/dashboard/gallery/auction",
    },
    {
      title: "Upload artwork",
      icon: upload,
      url: "/dashboard/gallery/upload",
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
