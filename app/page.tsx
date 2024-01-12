import DesktopNavbar from "@/components/navbar/desktop/DesktopNavbar";
import ShuffleHero from "./features/hero/ShuffleGrid";
import LatestArtworks from "./features/featured/LatestArtworks";
import ArtsByMedium from "./features/artByMedium/ArtsByMedium";
import { nextAuthOptions } from "@/lib/auth/next-auth-options";
import { getServerSession } from "next-auth";
import Editorials from "./features/editorials/Editorials";
import TrendingArtworks from "./features/trending/TrendingArtworks";
import Footer from "@/components/footer/Footer";
import Newsletter from "@/components/footer/Newsletter";
import CuratedArtworkClientWrapper from "./features/curated/CuratedArtworkClientWrapper";

export default async function Home() {
  const session = await getServerSession(nextAuthOptions);
  return (
    <main className="">
      <DesktopNavbar />
      <ShuffleHero />
      {session?.user && session?.user.role === "user" ? (
        <CuratedArtworkClientWrapper />
      ) : null}
      <ArtsByMedium />
      <LatestArtworks />
      <Editorials />
      <TrendingArtworks />
      <Newsletter />
      <Footer />
    </main>
  );
}
