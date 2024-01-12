"use client";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { IconType } from "react-icons";
import { GrFavorite } from "react-icons/gr";
import { CgLogOut, CgProfile } from "react-icons/cg";
import { RiAuctionLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import Link from "next/link";
import { UserDashboardNavigationStore } from "@/store/user/navigation/NavigationStore";

const LoggedInUserDropDown = ({ user }: { user: string | undefined }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = UserDashboardNavigationStore((state) => [
    state.selected,
    state.setSelected,
  ]);

  return (
    <div className="px-2 py-4 flex items-center justify-center bg-white">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-3 py-2 rounded-sm text-dark transition-colors"
        >
          <span className="font-normal">{user}</span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-lg text-dark bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden z-50 ring-1 ring-dark/20"
        >
          <Option
            setSelectedTab={setSelected}
            setOpen={setOpen}
            Icon={GrFavorite}
            text="Saves"
          />
          <Option
            setSelectedTab={setSelected}
            setOpen={setOpen}
            Icon={RiAuctionLine}
            text="Orders"
          />
          <Option
            setSelectedTab={setSelected}
            setOpen={setOpen}
            Icon={CgProfile}
            text="Bids"
          />
          <Option
            setSelectedTab={setSelected}
            setOpen={setOpen}
            Icon={CiSettings}
            text="Settings"
          />
          <Option
            setSelectedTab={setSelected}
            setOpen={setOpen}
            Icon={CgLogOut}
            text="Logout"
          />
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({
  text,
  Icon,
  setOpen,
  setSelectedTab,
}: {
  text: string;
  Icon: IconType;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedTab: (label: string) => void;
}) => {
  return (
    <>
      {text === "Logout" ? (
        <>
          <motion.li
            variants={itemVariants}
            onClick={() => {
              setOpen(false);
            }}
            className="flex items-center gap-2 w-full p-2 text-base font-normal whitespace-nowrap rounded-md hover:bg-primary text-slate-700 hover:text-white transition-colors cursor-pointer"
          >
            <motion.span variants={actionIconVariants}>
              <Icon />
            </motion.span>
            <span>{text}</span>
          </motion.li>
        </>
      ) : (
        <Link href={`/dashboard/user/${text.toLowerCase()}`}>
          <motion.li
            variants={itemVariants}
            onClick={() => {
              setSelectedTab(text.toLowerCase());
              setOpen(false);
            }}
            className="flex items-center gap-2 w-full p-2 text-base font-normal whitespace-nowrap rounded-md hover:bg-primary text-slate-700 hover:text-white transition-colors cursor-pointer"
          >
            <motion.span variants={actionIconVariants}>
              <Icon />
            </motion.span>
            <span>{text}</span>
          </motion.li>
        </Link>
      )}
    </>
  );
};

export default LoggedInUserDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
