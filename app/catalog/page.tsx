import DesktopNavbar from "@/components/navbar/desktop/DesktopNavbar";
import React from "react";
import ArtsByMedium from "../features/artByMedium/ArtsByMedium";
import Filter from "./components/Filter";
import { fetchAllArtworks } from "@/services/artworks/fetchAllArtworks";
import AllArtworks from "./components/AllArtworks";
import FilterModal from "./components/FilterModal";
import { nextAuthOptions } from "@/lib/auth/next-auth-options";
import { getServerSession } from "next-auth";

export default async function page() {
  const artworks: { message: string; data: ArtworkResultTypes[] } =
    await fetchAllArtworks();
  const session = await getServerSession(nextAuthOptions);

  return (
    <main className="relative">
      <DesktopNavbar />
      <ArtsByMedium />
      <Filter />
      <FilterModal />
      <AllArtworks
        data={artworks.data}
        sessionId={session?.user.role === "user" ? session?.user.id : undefined}
      />
    </main>
  );
}
