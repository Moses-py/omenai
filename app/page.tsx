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
import { useQuery } from "@tanstack/react-query";
export default async function Home() {
  const session = await getServerSession(nextAuthOptions);
  // const artworks = await fetchAllArtworkImpressions();
  // const allArtworks = await fetchAllArtworks();
  const editorials = await listEditorials();

  return (
    <main>
      <DesktopNavbar />
      <ShuffleHero />
      {/* {session?.user && session?.user.role === "user" ? (
        <CuratedArtworkClientWrapper
          sessionId={
            session?.user.role === "user" ? session?.user.id : undefined
          }
        />
      ) : null} */}
      <TrendingArtworks
        // artworks={artworks}
        sessionId={session?.user.role === "user" ? session?.user.id : undefined}
      />
      <LatestArtworks
        sessionId={session?.user.role === "user" ? session?.user.id : undefined}
      />
      <Editorials editorials={editorials} />

      <Footer />
    </main>
  );
}
