import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/lib/auth/next-auth-options";
import CuratedArtworksLayout from "./CuratedArtworksLayout";

export default async function CuratedArtworkClientWrapper() {
  const session = await getServerSession(nextAuthOptions);
  return (
    <>{session?.user.role === "user" ? <CuratedArtworksLayout /> : null}</>
  );
}
