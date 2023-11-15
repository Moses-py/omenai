import NoVerificationBlock from "../components/NoVerificationBlock";
import UploadArtworkDetails from "./features/UploadArtworkDetails";

export default function UploadArtwork() {
  return (
    <div className="relative">
      <div className="px-5 py-0">
        <h1 className="text-base-theme font-light text-md">
          Upload an artwork
        </h1>
        <UploadArtworkDetails />
      </div>
      <NoVerificationBlock />
    </div>
  );
}
