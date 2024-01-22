import CuratedArtworksLayout from "./CuratedArtworksLayout";

export default function CuratedArtworkClientWrapper({
  sessionId,
}: {
  sessionId: string | undefined;
}) {
  return (
    <>
      <CuratedArtworksLayout sessionId={sessionId} />
    </>
  );
}
