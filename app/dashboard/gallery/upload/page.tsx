import UploadArtworkDetails from "./features/UploadArtworkDetails";
import UploadArtworkImage from "./features/UploadArtworkImage";

export default function UploadArtwork() {
  return (
    <>
      <div className="p-5">
        <h1 className="text-base-theme font-light text-lg">
          Upload an artwork
        </h1>
        <UploadArtworkDetails />
      </div>
    </>
  );
}
