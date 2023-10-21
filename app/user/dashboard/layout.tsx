import React, { Fragment } from "react";
import { MenuCard, Navbar, ProfileInfo, Sidebar } from "./features";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <Navbar />

      <main className="grid grid-cols-10 lg:px-10 lg:pt-16 lg:gap-10">
        <Sidebar />

        <div className="col-span-10 lg:col-span-8">
          <ProfileInfo />
          {children}
        </div>
      </main>

      <MenuCard />
    </Fragment>
  );
}
