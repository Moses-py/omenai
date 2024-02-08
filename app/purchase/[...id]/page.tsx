import DesktopNavbar from "@/components/navbar/desktop/DesktopNavbar";
import AddressForm from "./components/AddressForm";
import { fetchSingleArtwork } from "@/services/artworks/fetchSingleArtwork";
import { notFound } from "next/navigation";
import ProductItem from "./components/ProductItem";
import DeliveryMethod from "./components/DeliveryMethod";
import AskForHelp from "./components/AskForHelp";
import { fetchUserData } from "@/services/requests/fetchUserData";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/lib/auth/next-auth-options";
import { fetchSingleArtworkOnPurchase } from "@/services/artworks/fetchSingleArtworkOnPurchase";

export default async function page({ params }: { params: { id: string } }) {
  const artwork = await fetchSingleArtworkOnPurchase(
    decodeURIComponent(params.id)
  );
  if (artwork === undefined) return notFound();
  const session = await getServerSession(nextAuthOptions);
  const user = await fetchUserData(session!.user.id);

  const address: IndividualAddressTypes = user.data.address;
  return (
    <div className="relative h-full">
      <DesktopNavbar />
      <div className="grid-cols-1 grid md:grid-cols-2 xl:grid-cols-3 my-[3rem] p-5 gap-x-2">
        <div className="col-span-1 xl:col-span-2">
          <DeliveryMethod />
          <AddressForm
            userAddress={address}
            gallery_id={artwork.data.gallery_id}
            art_id={artwork.data.art_id}
          />
        </div>
        <div className="cols-span-1">
          <ProductItem artwork={artwork.data} />
        </div>
      </div>
      {/* <AskForHelp /> */}
    </div>
  );
}
