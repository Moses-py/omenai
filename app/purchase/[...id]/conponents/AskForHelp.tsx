import Link from "next/link";
import React from "react";

export default function AskForHelp() {
  return (
    <div className="flex w-full justify-center absolute bottom-0 py-5">
      <p>
        Need help?{" "}
        <Link href="mailto:moses@omenai.net" className="underline font-bold">
          Talk to us
        </Link>
      </p>
    </div>
  );
}
