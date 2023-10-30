import NextTopLoader from "nextjs-toploader";
import PageLayout from "./features/PageLayout";
import MobilePageLayout from "./features/MobilePageLayout";
import { IndividualLogo } from "@/components/logo/Logo";
import { CiMenuFries } from "react-icons/ci";
import Appbar from "./components/Appbar";
export default function GalleryDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#F8F9FA] w-full">
      <NextTopLoader color="#6246EA" height={6} />
      <main className="flex">
        <div className="hidden md:block">
          <PageLayout />
        </div>
        <div className="block md:hidden">
          <MobilePageLayout />
        </div>

        <div className="w-full p-5">
          <Appbar />
          <div className="h-auto rounded-lg ring-1 ring-base-theme/20 md:mx-5 my-5 p-5">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
