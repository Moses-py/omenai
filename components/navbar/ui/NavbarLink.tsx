"use client";
import { actionStore } from "@/store/actions/ActionStore";
import Link from "next/link";
import { CiLock } from "react-icons/ci";

type NavbarLinkProps = {
  disabled: boolean;
  text: string;
  link: string;
};
export default function NavbarLink({ disabled, text, link }: NavbarLinkProps) {
  const [updateOpenSideNav] = actionStore((state) => [state.updateOpenSideNav]);

  return (
    <>
      {disabled ? (
        <>
          <li className="relative text-base text-dark/40 font-normal">
            <p className="cursor-not-allowed" aria-disabled>
              {text}
            </p>
            <CiLock className="absolute right-[-15px] top-[-5px]" />
          </li>
        </>
      ) : (
        <li className="text-base w-fit text-black font-normal flex flex-col group">
          <Link href={link} onClick={() => updateOpenSideNav(false)}>
            {text}
          </Link>
          <div className="h-1 bg-dark w-0 group-hover:w-full duration-300" />
        </li>
      )}
    </>
  );
}
