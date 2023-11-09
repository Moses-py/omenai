"use client";
import NextTopLoader from "nextjs-toploader";
import PageLayout from "./features/PageLayout";
import MobilePageLayout from "./features/MobilePageLayout";
import Appbar from "./components/Appbar";
import { galleryNavigationActions } from "@/store/gallery/gallery_navigation/GalleryNavigation";
import { useWindowSize } from "usehooks-ts";
import NoMobileView from "./components/NoMobileView";
export default function GalleryDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open] = galleryNavigationActions((state: { open: any }) => [
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
            <div className="block md:hidden">
              <MobilePageLayout />
            </div>

            <div
              className={`w-full ${
                open ? "xl:ml-[18.5rem] md:ml-[14.5rem]" : "md:ml-[6.5rem] ml-0"
              } relative duration-200`}
            >
              <Appbar />
              <div className="h-auto rounded-lg relative my-5">{children}</div>
            </div>
          </main>
        </div>
      )}
    </>
  );
}
