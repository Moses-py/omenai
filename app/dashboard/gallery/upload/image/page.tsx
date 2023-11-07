import UploadArtworkImage from "../features/UploadArtworkImage";

export default function page() {
  return (
    <div className="p-5">
      <h1 className="text-base-theme font-light text-lg">
        Upload artwork image
      </h1>
      <div className="my-12">
        <UploadArtworkImage />
      </div>
    </div>
  );
}
