"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tooltip } from "flowbite-react";
import IconWrapper from "@/app/dashboard/gallery/components/IconWrapper";
import { editorialAdminNavigations } from "../store/EditorialAdminNavigations";

type ItemProps = {
  title: string;
  icon: React.ReactNode;
  url: string;
  mobile: boolean;
  onClick?: () => void;
};
export default function NavigationItem({
  title,
  icon,
  url,
  mobile,
  onClick,
}: ItemProps) {
  const [open] = editorialAdminNavigations((state) => [state.open]);

  const pathname = usePathname();
  return (
    <>
      {title === "Sign out" ? (
        <Tooltip
          content={title}
          style="dark"
          animation="duration-500"
          className={`text-[0.7rem] border-primary p-2 relative  ${
            open && "hidden"
          }`}
        >
          <li
            onClick={onClick}
            className={`p-2 ${
              (open || mobile) && "gap-x-4 "
            } group flex items-center w-fitrounded-md`}
          >
            <IconWrapper
              className={`group-hover:bg-primary bg-white duration-300 `}
            >
              {icon}
            </IconWrapper>
            <p
              className={`text-xs p-2 text-white font-light ${
                !open && !mobile && "scale-0 hidden"
              } duration-200`}
            >
              {title}
            </p>
          </li>
        </Tooltip>
      ) : (
        <Tooltip
          content={title}
          style="dark"
          animation="duration-500"
          className={`text-[0.7rem] border-primary p-2 relative ${
            open && "hidden"
          }`}
        >
          <Link
            onClick={onClick}
            href={url}
            className={`p-2 ${
              (open || mobile) && "gap-x-4"
            } group flex items-center w-fitrounded-md`}
          >
            <IconWrapper
              className={`group-hover:bg-primary duration-300 ${
                pathname.startsWith(url) ? "bg-primary" : "bg-white"
              }`}
            >
              {icon}
            </IconWrapper>
            <p
              className={`text-xs p-2 text-white  font-light ${
                !open && !mobile && "scale-0 hidden"
              } duration-200`}
            >
              {title}
            </p>
          </Link>
        </Tooltip>
      )}
    </>
  );
}
