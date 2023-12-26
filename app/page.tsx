import DesktopNavbar from "@/components/navbar/desktop/DesktopNavbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <DesktopNavbar />
      {/* <Link href={"/auth/login/individual"}>
        <button className="py-2 px-3 bg-primary text-white rounded-md font-sans">
          Login to individual account
        </button>
      </Link>
      <Link href={"/secure/editorial/admin/editorials"}>
        <button className="py-2 px-3 bg-primary text-white rounded-md font-sans">
          Go to editorial dashboard
        </button>
      </Link>
      <Link href={"/dashboard/gallery/overview"}>
        <button className="py-2 px-3 bg-primary text-white rounded-md font-sans">
          View gallery dashboard
        </button>
      </Link> */}
    </main>
  );
}
