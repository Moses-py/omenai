import { CiBoxList } from "react-icons/ci";
import { TbChartHistogram } from "react-icons/tb";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineWorkspacePremium } from "react-icons/md";

const total_artworks_icon = <CiBoxList className="text-white text-sm" />;
const total_impressions_icon = (
  <TbChartHistogram className="text-white text-sm" />
);
const sold_artworks_icon = (
  <RiMoneyDollarCircleLine className="text-white text-sm" />
);
const subscription_type_icon = (
  <MdOutlineWorkspacePremium className="text-white text-sm" />
);

export const highlightCardEl: HighlightCardElProps[] = [
  { title: "Total artworks", icon: total_artworks_icon, tag: "artworks" },
  {
    title: "Total impressions",
    icon: total_impressions_icon,
    tag: "impressions",
  },
  { title: "Sold artworks", icon: sold_artworks_icon, tag: "sales" },
  {
    title: "Subscription",
    icon: subscription_type_icon,
    tag: "subscription",
  },
];

type HighlightCardElProps = {
  title: string;
  icon: React.ReactNode;
  value?: string;
  tag: string;
};
