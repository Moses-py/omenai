import { MenuCard, Navbar, ProfileInfo, Sidebar } from "./features";
import NextTopLoader from "nextjs-toploader";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#F8F9FA]">
      <NextTopLoader color="#6246EA" height={6} />

      <Navbar />

      <main className="flex">
        <div className="flex-initial md:w-[250px] lg:w-[350px] p-2 hidden md:block">
          <Sidebar />
        </div>

        <div className="flex-1 p-2">
          <ProfileInfo />
          {children}
        </div>
      </main>

      <MenuCard />
    </div>
  );
}
