"use client";
import Link from "next/link";
import ArtworkDimensionsInputGroup from "./components/ArtworkDimensionsInputGroup";
import ArtworkInfoInputGroup from "./components/ArtworkInfoInputGroup";
import ArtworkPriceInputGroup from "./components/ArtworkPriceInputGroup";
import { BsArrowRight } from "react-icons/bs";
export default function UploadArtworkDetails() {
  return (
    <div className="py-4">
      {/* Details inputs */}
      <h2 className="text-primary font-normal text-sm">Artwork details</h2>
      <form>
        <ArtworkInfoInputGroup />
        <ArtworkDimensionsInputGroup />
        <ArtworkPriceInputGroup />
        <div className="w-full flex justify-end my-12">
          <Link href={"/dashboard/gallery/upload/image"}>
            <button
              type="submit"
              className="rounded-full bg-primary text-white px-4 py-2 flex gap-2 items-center justify-center hover:bg-primary/70"
            >
              Next
              <BsArrowRight />
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
