"use client";
import NextTopLoader from "nextjs-toploader";
import PageLayout from "./features/PageLayout";

import { useWindowSize } from "usehooks-ts";
import NoMobileView from "@/app/dashboard/gallery/components/NoMobileView";
import { editorialAdminNavigations } from "./store/EditorialAdminNavigations";
import Appbar from "./features/Appbar";

export default function EditorialDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open] = editorialAdminNavigations((state: { open: any }) => [
    state.open,
  ]);
  const { width } = useWindowSize();

  return (
    <>
      {width < 768 ? (
        <NoMobileView />
      ) : (
        <div className=" w-full h-screen">
          <NextTopLoader color="#6246EA" height={6} />
          <main className="flex h-full">
            <div className="hidden md:block">
              <PageLayout />
            </div>

            <div
              className={`w-full ${
                open ? "xl:ml-[19rem] md:ml-[15rem]" : "md:ml-[7rem] ml-0"
              } relative duration-200`}
            >
              <Appbar />
              <div className="h-auto rounded-lg relative my-5 px-5">
                {children}
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
}
