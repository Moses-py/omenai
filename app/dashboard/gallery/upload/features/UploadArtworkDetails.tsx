"use client";
import ArtworkDimensionsInputGroup from "./components/ArtworkDimensionsInputGroup";
import ArtworkInfoInputGroup from "./components/ArtworkInfoInputGroup";
import ArtworkPriceInputGroup from "./components/ArtworkPriceInputGroup";
import { BsArrowRight } from "react-icons/bs";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { galleryArtworkUploadStore } from "@/store/gallery/gallery_artwork_upload/GalleryArtworkUpload";
import { allKeysEmpty } from "@/utils/checkIfObjectEmpty";
export default function UploadArtworkDetails() {
  const router = useRouter();
  const [errorFields] = galleryArtworkUploadStore((state) => [
    state.errorFields,
  ]);

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!allKeysEmpty(errorFields)) toast.error("Invalid field inputs...");
    else {
      toast.success("Processing...please wait");
      router.push("/dashboard/gallery/upload/image");
    }
  }
  return (
    <div className="py-4">
      {/* Details inputs */}
      <h2 className="text-primary font-normal text-sm">Artwork details</h2>
      <form onSubmit={handleFormSubmit}>
        <ArtworkInfoInputGroup />
        <ArtworkDimensionsInputGroup />
        <ArtworkPriceInputGroup />
        <div className="w-full flex justify-end my-12">
          <button
            type="submit"
            className="rounded-full bg-primary disabled:bg-base-theme disabled:cursor-not-allowed text-white px-4 py-2 flex gap-2 items-center justify-center hover:bg-primary/70"
          >
            <>
              Next
              <BsArrowRight />
            </>
          </button>
        </div>
      </form>
    </div>
  );
}
