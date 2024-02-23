import { fetchUserData } from "@/services/requests/fetchUserData";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/lib/auth/next-auth-options";
import { fetchSingleArtworkOnPurchase } from "@/services/artworks/fetchSingleArtworkOnPurchase";
import PurchaseComponentWrapper from "./components/PurchaseComponentWrapper";

export default async function page({ params }: { params: { id: string } }) {
  const session = await getServerSession(nextAuthOptions);
  const artwork = await fetchSingleArtworkOnPurchase(
    decodeURIComponent(params.id)
  );
  if (!artwork?.isOk) throw new Error("Something went wrong");

  return <PurchaseComponentWrapper artwork={artwork.data} />;
}
