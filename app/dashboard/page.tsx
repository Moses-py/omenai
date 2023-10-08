"use client";
import { signOut } from "next-auth/react";
import React from "react";

export default function Dashboard() {
  return (
    <div>
      <button
        className="bg-red-500 rounded-lg px-3 py-2 m-3"
        onClick={() => signOut({})}
      >
        Sign Out
      </button>
    </div>
  );
}
