"use client";
import ArtworkDimensionsInputGroup from "./components/ArtworkDimensionsInputGroup";
import ArtworkInfoInputGroup from "./components/ArtworkInfoInputGroup";
import ArtworkPriceInputGroup from "./components/ArtworkPriceInputGroup";
import { BsArrowRight } from "react-icons/bs";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
export default function UploadArtworkDetails() {
  const router = useRouter();

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast.success("Processing...please wait");
    router.push("/dashboard/gallery/upload/image");
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
            className="rounded-full bg-primary text-white px-4 py-2 flex gap-2 items-center justify-center hover:bg-primary/70"
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
