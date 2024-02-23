import DesktopNavbar from "@/components/navbar/desktop/DesktopNavbar";
import ProductBox from "./components/ProductBox";
import { fetchSingleArtwork } from "@/services/artworks/fetchSingleArtwork";
import SimilarArtworks from "./components/SimilarArtworks";
import { fetchArtworksByCriteria } from "@/services/artworks/fetchArtworksByCriteria";
import { nextAuthOptions } from "@/lib/auth/next-auth-options";
import { getServerSession } from "next-auth";
import Footer from "@/components/footer/Footer";
import { notFound } from "next/navigation";

export default async function page({ params }: { params: { id: string } }) {
  const session = await getServerSession(nextAuthOptions);

  const artworkDetails:
    | {
        isOk: boolean;
        message: string;
        data: ArtworkResultTypes;
      }
    | undefined = await fetchSingleArtwork(decodeURIComponent(params.id));
  if (artworkDetails === undefined) return notFound();
  const artworksByCriteria = await fetchArtworksByCriteria(
    artworkDetails.data.medium
  );

  return (
    <div className="">
      <DesktopNavbar />
      <ProductBox
        data={artworkDetails.data}
        sessionId={session?.user.role === "user" ? session?.user.id : undefined}
      />
      <SimilarArtworks
        title={artworkDetails.data.title}
        artworksByCriteria={artworksByCriteria}
        sessionId={session?.user.role === "user" ? session?.user.id : undefined}
      />
      <Footer />
    </div>
  );
}
