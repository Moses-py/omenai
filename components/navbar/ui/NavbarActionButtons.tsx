"use client";
import { Dropdown } from "flowbite-react";
import Link from "next/link";
import { FaBusinessTime } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
export default function NavbarActionButtons() {
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 w-fit text-base">
      <Dropdown
        size={"sm"}
        label="Login"
        dismissOnClick={false}
        renderTrigger={() => (
          <button className="py-1 px-5 rounded-sm bg-dark text-white">
            Login
          </button>
        )}
      >
        <Dropdown.Item className="text-base" icon={FaBusinessTime}>
          For Galleries
        </Dropdown.Item>
        <Dropdown.Item className="text-base" icon={FaUser}>
          For Individuals
        </Dropdown.Item>
      </Dropdown>
      <Dropdown
        size={"sm"}
        label="Sign up"
        dismissOnClick={false}
        placement="left-start"
        renderTrigger={() => (
          <button className="py-1 px-5 rounded-sm text-dark ring-1 ring-dark/30">
            Sign up
          </button>
        )}
      >
        <Dropdown.Item className="text-base" icon={FaBusinessTime}>
          For Galleries
        </Dropdown.Item>
        <Dropdown.Item className="text-base" icon={FaUser}>
          For Individuals
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}
