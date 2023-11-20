import React from "react";
import { ClipLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="w-full h-full grid place-items-center">
      <ClipLoader size={40} color="#2A9EDF" />
    </div>
  );
}
