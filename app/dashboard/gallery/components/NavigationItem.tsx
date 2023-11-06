"use client";
import { galleryNavigationActions } from "@/store/gallery/gallery_navigation/GalleryNavigation";
import IconWrapper from "./IconWrapper";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tooltip } from "flowbite-react";

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
  const [open] = galleryNavigationActions((state) => [state.open]);

  const pathname = usePathname();
  return (
    <>
      {title === "Sign out" ? (
        <Tooltip
          content={title}
          style="light"
          placement="bottom"
          animation="duration-500"
          className={`text-xs p-2 ${open && "hidden"}`}
        >
          <li
            onClick={onClick}
            className={`p-2 ${
              (open || mobile) && "gap-x-4 "
            } group flex items-center w-fullrounded-md`}
          >
            <IconWrapper className={`group-hover:bg-primary duration-300 `}>
              {icon}
            </IconWrapper>
            <p
              className={`text-xs p-2-theme  font-light ${
                !open && !mobile && "scale-0"
              } duration-200`}
            >
              {title}
            </p>
          </li>
        </Tooltip>
      ) : (
        <Tooltip
          content={title}
          style="light"
          placement="bottom"
          animation="duration-500"
          className={`text-xs p-2 ${open && "hidden"}`}
        >
          <Link
            onClick={onClick}
            href={url}
            className={`p-2 ${
              (open || mobile) && "gap-x-4"
            } group flex items-center w-fullrounded-md`}
          >
            <IconWrapper
              className={`group-hover:bg-primary duration-300 ${
                pathname.startsWith(url) && "bg-primary"
              }`}
            >
              {icon}
            </IconWrapper>
            <p
              className={`text-xs p-2-theme  font-light ${
                !open && !mobile && "scale-0"
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
