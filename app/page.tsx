import DesktopNavbar from "@/components/navbar/desktop/DesktopNavbar";
import ShuffleHero from "./features/hero/ShuffleGrid";
import FeaturedArtworks from "./features/featured/FeaturedArtworks";

export default function Home() {
  return (
    <main className="">
      <DesktopNavbar />
      <ShuffleHero />
      <FeaturedArtworks />
    </main>
  );
}
