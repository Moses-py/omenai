import Link from "next/link";
import { IndividualLogo } from "../logo/Logo";

export default function Navbar() {
  return (
    <div className="p-5 flex justify-between items-center">
      <IndividualLogo />
      <div className="flex gap-4">
        <button className="bg-white text-dark">Login</button>
        <button className="bg-primary rounded-lg px-5 py-2 text-dark">
          Sign up
        </button>
      </div>
    </div>
  );
}
