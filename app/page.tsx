import DesktopNavbar from "@/components/navbar/desktop/DesktopNavbar";
import ShuffleHero from "./features/hero/ShuffleGrid";
import LatestArtworks from "./features/featured/LatestArtworks";
import ArtsByMedium from "./features/artByMedium/ArtsByMedium";
import CuratedArtworkClientWrapper from "./features/curated/CuratedArtworkClientWrapper";
import { nextAuthOptions } from "@/lib/auth/next-auth-options";
import { getServerSession } from "next-auth";
import CuratedArtworksLayout from "./features/curated/CuratedArtworksLayout";
import Editorials from "./features/editorials/Editorials";
import TrendingArtworks from "./features/trending/TrendingArtworks";
import Footer from "@/components/footer/Footer";

export default async function Home() {
  const session = await getServerSession(nextAuthOptions);
  return (
    <main className="">
      <DesktopNavbar />
      <ShuffleHero />
      {session?.user.role === "user" ? <CuratedArtworksLayout /> : null}
      <ArtsByMedium />
      <LatestArtworks />
      <Editorials />
      <TrendingArtworks />
      <Footer />
    </main>
  );
}
