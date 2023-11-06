import Navbar from "@/components/navbar/Navbar";
import React from "react";
import Landing from "./components/Landing";
import { PackageCard } from "./components/PackageCard";
import Faq from "./components/Faq";

export default function PricingPage() {
  return (
    <div className="sm:container p-5">
      <Navbar />
      <Landing />
      <PackageCard />
      <Faq />
    </div>
  );
}
