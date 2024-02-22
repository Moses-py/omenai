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
import { MdAccountCircle } from "react-icons/md";
import { signOut } from "next-auth/react";
import { toast } from "sonner";

const LoggedInUserDropDown = ({ user }: { user: string | undefined }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = UserDashboardNavigationStore(
    (state: { selected: any; setSelected: any }) => [
      state.selected,
      state.setSelected,
    ]
  );

  return (
    <div className=" py-4 flex items-center justify-center bg-white">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 pl-3 py-2 rounded-sm text-dark transition-colors"
        >
          <span className="sm:block hidden font-normal text-[0.9rem]">
            {user}
          </span>
          <span className="sm:hidden block">
            <MdAccountCircle className="text-md" />
          </span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-100%" }}
          className="flex flex-col gap-2 p-2 rounded-lg text-dark bg-white shadow-xl absolute top-[120%] left-[100%] w-48 overflow-hidden z-40 ring-1 ring-dark/20"
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
  function handleSignout() {
    signOut({ callbackUrl: "/" });
    toast.success("Successfully signed out...redirecting");
    setOpen(false);
  }
  return (
    <>
      {text === "Logout" ? (
        <>
          <motion.li
            variants={itemVariants}
            onClick={handleSignout}
            className="flex items-center gap-2 w-full p-2 text-base font-normal whitespace-nowrap rounded-md hover:bg-dark text-slate-700 hover:text-white transition-colors cursor-pointer"
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
            className="flex items-center gap-2 w-full p-2 text-base font-normal whitespace-nowrap rounded-md hover:bg-dark text-slate-700 hover:text-white transition-colors cursor-pointer"
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
