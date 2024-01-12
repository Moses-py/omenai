import CuratedArtworksLayout from "./CuratedArtworksLayout";
import { useEffectOnce } from "usehooks-ts";
import { useRouter } from "next/navigation";

export default function CuratedArtworkClientWrapper() {
  return (
    <>
      <CuratedArtworksLayout />
    </>
  );
}
