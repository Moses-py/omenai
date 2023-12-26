import React from "react";
import Landing from "./components/Landing";
import { PackageCard } from "./components/PackageCard";
import Faq from "./components/Faq";
import DesktopNavbar from "@/components/navbar/desktop/DesktopNavbar";

export default function PricingPage() {
  return (
    <div className="">
      <DesktopNavbar />
      <div className="sm:container p-5">
        <Landing />
        <PackageCard />
        <Faq />
      </div>
    </div>
  );
}
