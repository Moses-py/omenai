import React from "react";

type DimensionsProps = {
  dimensions: ArtworkDimensions;
};
export default function Dimensions({ dimensions }: DimensionsProps) {
  return (
    <div className="">
      <h6 className="text-dark/80 underline font-semibold text-base mb-2">
        Dimensions:
      </h6>
      <p className="text-dark/80 my-1 text-base font-medium">
        Height: {dimensions.height}
      </p>
      <p className="text-dark/80 my-1 text-base font-medium">
        Width: {dimensions.width}
      </p>
      <p className="text-dark/80 my-1 text-base font-medium">
        Weight: {dimensions.weight}
      </p>
      <p className="text-dark/80 my-1 text-base font-medium">
        Depth: {dimensions.depth || `N/A`}
      </p>
    </div>
  );
}
