import DesktopNavbar from "@/components/navbar/desktop/DesktopNavbar";
import ProductBox from "./components/ProductBox";
import FullArtworkDetails from "./components/FullArtworkDetails";
import Footer from "@/components/footer/Footer";
import { fetchSingleArtwork } from "@/services/artworks/fetchSingleArtwork";
import SimilarArtworks from "./components/SimilarArtworks";

export default async function page({ params }: { params: { id: string } }) {
  const artworkDetails: { message: string; data: ArtworkResultTypes } =
    await fetchSingleArtwork(decodeURIComponent(params.id));
  return (
    <div className="">
      <DesktopNavbar />
      <ProductBox data={artworkDetails.data} />
      <FullArtworkDetails data={artworkDetails.data} />
      <SimilarArtworks
        medium={artworkDetails.data.medium}
        title={artworkDetails.data.title}
      />
      <Footer />
    </div>
  );
}
