"use client"; // Error components must be Client Components

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="text-center space-y-4 flex flex-col items-center">
        <h2>Uh Oh! Something seems to have gone wrong with your request</h2>
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
          className="w-fit px-5 disabled:cursor-not-allowed disabled:bg-white disabled:border disabled:border-dark bg-dark py-3 text-white text-base hover:bg-white hover:text-dark hover:border hover:border-dark hover:underline duration-300 grid place-items-center group"
        >
          Let&apos;s try it again.
        </button>
        <p>
          If it still doesn&apos;t work after multiple tries, please contact us
          via{" "}
          <Link
            href={"mailto: moses@omenai.net"}
            className="text-primary font-bold underline"
          >
            {" "}
            our mail
          </Link>
        </p>
      </div>
    </div>
  );
}
