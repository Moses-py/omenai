import React, { Fragment } from "react";
import { Navbar, Sidebar } from "../features";

export default function Profile() {
  return (
    <Fragment>
      <Navbar />

      <main className="grid grid-cols-10 px-5 lg:px-10">
        <Sidebar />

        <div className="col-span-8"></div>
      </main>
    </Fragment>
  );
}
