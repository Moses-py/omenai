"use client";
import { signOut, useSession } from "next-auth/react";
import React from "react";

export default function Dashboard() {
  const { data, status } = useSession();
  return (
    <div>
      <h1 className="text-2xl">{status}</h1>
      <button
        className="bg-red-500 rounded-lg px-3 py-2 m-3"
        onClick={() => signOut({})}
      >
        Sign Out
      </button>
    </div>
  );
}
