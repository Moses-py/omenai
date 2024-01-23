import DesktopNavbar from "@/components/navbar/desktop/DesktopNavbar";
import ShuffleHero from "./features/hero/ShuffleGrid";
import LatestArtworks from "./features/featured/LatestArtworks";
import { nextAuthOptions } from "@/lib/auth/next-auth-options";
import { getServerSession } from "next-auth";
import Editorials from "./features/editorials/Editorials";
import TrendingArtworks from "./features/trending/TrendingArtworks";
import Footer from "@/components/footer/Footer";
import CuratedArtworkClientWrapper from "./features/curated/CuratedArtworkClientWrapper";

export default async function Home() {
  const session = await getServerSession(nextAuthOptions);

  return (
    <main>
      <DesktopNavbar />
      <ShuffleHero />
      {session?.user && session?.user.role === "user" ? (
        <CuratedArtworkClientWrapper
          sessionId={
            session?.user.role === "user" ? session?.user.id : undefined
          }
        />
      ) : null}
      <TrendingArtworks
        // artworks={artworks}
        sessionId={session?.user.role === "user" ? session?.user.id : undefined}
      />
      <LatestArtworks
        sessionId={session?.user.role === "user" ? session?.user.id : undefined}
      />
      <Editorials />
      <Footer />
    </main>
  );
}
