import DesktopNavbar from "@/components/navbar/desktop/DesktopNavbar";
import NextTopLoader from "nextjs-toploader";
import Banner from "./LayoutDesign/Banner";
import NavigationChipTabs from "./LayoutDesign/NavigationTabs";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <NextTopLoader color="#6246EA" height={6} />

      <DesktopNavbar />

      <main className="">
        <Banner />
        <NavigationChipTabs />
        {children}
      </main>
    </div>
  );
}
