import DesktopNavbar from "@/components/navbar/desktop/DesktopNavbar";
import AddressForm from "./conponents/AddressForm";
import { fetchSingleArtwork } from "@/services/artworks/fetchSingleArtwork";
import { notFound } from "next/navigation";
import ProductItem from "./conponents/ProductItem";
import DeliveryMethod from "./conponents/DeliveryMethod";
import AskForHelp from "./conponents/AskForHelp";

export default async function page({ params }: { params: { id: string } }) {
  const artwork = await fetchSingleArtwork(decodeURIComponent(params.id));
  if (artwork === undefined) return notFound();

  return (
    <div className="relative h-full">
      <DesktopNavbar />
      <div className="grid-cols-1 grid md:grid-cols-2 xl:grid-cols-3 my-[3rem] p-5 gap-x-2">
        <div className="col-span-1 xl:col-span-2">
          <DeliveryMethod />
          <AddressForm />
        </div>
        <div className="cols-span-1">
          <ProductItem artwork={artwork.data} />
        </div>
      </div>
      {/* <AskForHelp /> */}
    </div>
  );
}
