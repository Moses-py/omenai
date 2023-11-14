import React from "react";
import { ClipLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="w-full h-full grid place-items-center">
      <ClipLoader size={50} color="red" />
    </div>
  );
}
