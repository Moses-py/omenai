"use client";
import { actionStore } from "@/store/actions/ActionStore";
import { useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";

export default function Filter() {
  const [toggleFilterModal] = actionStore((state) => [state.toggleFilterModal]);

  return (
    // <div className="w-full px-4 pb-4 mb-4">
    //   <div
    //     className="rounded-full px-4 py-1 border border-dark flex space-x-2 items-center w-fit cursor-pointer"
    //     onClick={() => toggleFilterModal(true)}
    //   >
    //     <GiSettingsKnobs />
    //     <span className="text-xs font-bold text-dark">Filters</span>
    //   </div>
    // </div>
    null
  );
}
