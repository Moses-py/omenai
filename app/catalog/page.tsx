import DesktopNavbar from "@/components/navbar/desktop/DesktopNavbar";
import React from "react";
import ArtsByMedium from "../features/artByMedium/ArtsByMedium";
import Filter from "./components/Filter";
import { fetchAllArtworks } from "@/services/artworks/fetchAllArtworks";
import AllArtworks from "./components/AllArtworks";
import FilterModal from "./components/FilterModal";

export default async function page() {
  const artworks: { message: string; data: ArtworkResultTypes[] } =
    await fetchAllArtworks();

  return (
    <main className="relative">
      <DesktopNavbar />
      <ArtsByMedium />
      <Filter />
      <FilterModal />
      <AllArtworks data={artworks.data} />
    </main>
  );
}
