"use client";

import Image from "next/image";
import { useRef } from "react";
import { editorialAdminStore } from "../store/EditorialAdminStore";

export default function ImageUpload() {
  const imagePickerRef = useRef<HTMLInputElement>(null);

  const [cover, setCover] = editorialAdminStore((state) => [
    state.cover,
    state.setCover,
  ]);
  return (
    <div>
      <div className="w-[600px] h-[300px]">
        {cover ? (
          <Image
            src={URL.createObjectURL(cover as File)}
            alt="uploaded image"
            width={600}
            height={300}
            className="w-[600px] h-[300px] object-cover object-top mt-2 filter hover:grayscale transition-all duration-200 rounded-lg cursor-not-allowed"
            onClick={() => {
              setCover(undefined);
            }}
          />
        ) : (
          <button
            type="button"
            className="w-full h-full border border-dark/10 rounded-md outline-none p-5 focus-visible:ring-2 focus-visible:ring-base-theme focus-visible:ring-offset-2 hover:border-base-theme"
            onClick={() => {
              imagePickerRef.current?.click();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            Upload cover image
          </button>
        )}

        <input
          type="file"
          hidden
          ref={imagePickerRef}
          onChange={(e) => {
            // Check if input is actaully an image
            if (!e.target.files![0].type.startsWith("image/")) return;
            setCover(e.target.files![0]);
          }}
        />
      </div>
    </div>
  );
}
