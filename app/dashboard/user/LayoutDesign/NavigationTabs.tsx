"use client";
import { UserDashboardNavigationStore } from "@/store/user/navigation/NavigationStore";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = ["Saves", "Bids", "Profile", "Settings"];

const NavigationChipTabs = () => {
  //   const [selected, setSelected] = useState(tabs[0]);
  const [selected, setSelected] = UserDashboardNavigationStore((state) => [
    state.selected,
    state.setSelected,
  ]);

  const pathname = usePathname().split("/");
  const lastPath = pathname.at(-1);

  return (
    <div className=" pb-[0.90rem] pt-14 grid grid-cols-4 items-center w-full border-b border-b-dark/10">
      {tabs.map((tab) => (
        <Chip
          text={tab}
          selectedTab={selected === tab.toLowerCase()}
          setSelectedTab={setSelected}
          key={tab}
        />
      ))}
    </div>
  );
};

const Chip = ({
  text,
  selectedTab,
  setSelectedTab,
}: {
  text: string;
  selectedTab: boolean;
  setSelectedTab: (label: string) => void;
}) => {
  return (
    <Link
      href={`/dashboard/user/${text.toLowerCase()}`}
      onClick={() => setSelectedTab(text.toLowerCase())}
      className={`hover:text-primary hover:underline text-xs xs:text-base transition-colors py-0.5 relative text-center`}
    >
      <span className="relative z-10">{text}</span>
      {selectedTab && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 border-b border-b-dark bottom-[-15px]"
        ></motion.span>
      )}
    </Link>
  );
};

export default NavigationChipTabs;
