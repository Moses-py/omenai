import DesktopNavbar from "@/components/navbar/desktop/DesktopNavbar";
import ShuffleHero from "./features/hero/ShuffleGrid";
import LatestArtworks from "./features/featured/LatestArtworks";
import { nextAuthOptions } from "@/lib/auth/next-auth-options";
import { getServerSession } from "next-auth";
import Editorials from "./features/editorials/Editorials";
import TrendingArtworks from "./features/trending/TrendingArtworks";
import Footer from "@/components/footer/Footer";
import CuratedArtworkClientWrapper from "./features/curated/CuratedArtworkClientWrapper";
import { fetchAllArtworkImpressions } from "@/services/artworks/fetchArtworkImpressions";
import { fetchAllArtworks } from "@/services/artworks/fetchAllArtworks";
import { listEditorials } from "./secure/editorial/admin/lib/getAllBlogArticles";

export default async function Home() {
  const session = await getServerSession(nextAuthOptions);
  const artworks = await fetchAllArtworkImpressions();
  const allaArtworks = await fetchAllArtworks();
  const editorials = await listEditorials();

  return (
    <main className="">
      <DesktopNavbar />
      <ShuffleHero />
      {session?.user && session?.user.role === "user" ? (
        <CuratedArtworkClientWrapper />
      ) : null}
      <TrendingArtworks artworks={artworks} />
      {/* <ArtsByMedium /> */}
      <LatestArtworks artworks={allaArtworks} />
      <Editorials editorials={editorials} />

      <Footer />
    </main>
  );
}
