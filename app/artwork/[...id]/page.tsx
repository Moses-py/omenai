import DesktopNavbar from "@/components/navbar/desktop/DesktopNavbar";
import ProductBox from "./components/ProductBox";
import Footer from "@/components/footer/Footer";
import { fetchSingleArtwork } from "@/services/artworks/fetchSingleArtwork";
import SimilarArtworks from "./components/SimilarArtworks";
import { fetchArtworksByCriteria } from "@/services/artworks/fetchArtworksByCriteria";

export default async function page({ params }: { params: { id: string } }) {
  const artworkDetails: { message: string; data: ArtworkResultTypes } =
    await fetchSingleArtwork(decodeURIComponent(params.id));
  const artworksByCriteria = await fetchArtworksByCriteria(
    artworkDetails.data.medium
  );

  return (
    <div className="">
      <DesktopNavbar />
      <ProductBox data={artworkDetails.data} />
      <SimilarArtworks
        title={artworkDetails.data.title}
        artworksByCriteria={artworksByCriteria}
      />
      <Footer />
    </div>
  );
}
