"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function FileCheck() {
  const [file, setFile] = useState<File | null>(null);

  const acceptedFileTypes = ["webp", "jpg", "jpeg", "png", "svg"];

  function handleClick() {
    const type = file!.type.split("/");
    if (!acceptedFileTypes.includes(type[1])) {
      toast.error(
        "File type unsupported. Supported file types are: JPEG, JPG, PNG, WEBP and SVG"
      );
      console.log(type);
      return;
    }

    console.log("Supported file type", type[1]);
    console.log("This will run after");
  }
  console.log(file?.type);
  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files![0])} />
      <button onClick={handleClick} className="bg-red-400">
        Process file
      </button>
    </div>
  );
}
