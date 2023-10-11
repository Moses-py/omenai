"use client";
import { signOut, useSession } from "next-auth/react";
import React from "react";

export default function Dashboard() {
  const { data, status } = useSession();
  return (
    <div>
      <h1 className="text-2xl">{status}</h1>

      <span className="">
        {JSON.stringify(data)} <br />
      </span>
      <button
        className="bg-red-500 rounded-lg px-3 py-2 m-3"
        onClick={() => signOut({})}
      >
        Sign Out
      </button>
    </div>
  );
}
