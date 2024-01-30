type FullArtworkDetailsType = {
  data: ArtworkResultTypes;
};
export default function FullArtworkDetails({ data }: FullArtworkDetailsType) {
  return (
    <div className=" my-5">
      <h3 className="text-dark/80 underline font-semibold text-base mb-4">
        More about this artwork
      </h3>
      <div className="w-full grid grid-cols-12">
        <div className="col-span-6 md:col-span-4">
          <ul className="w-full flex flex-col text-dark/80 justify-center gap-y-3 py-4 font-semibold">
            <li>Materials</li>
            <li>Description</li>
            <li>Artist birth year</li>
            <li>Artist country of origin</li>
            <li>Artwork packaging</li>
            <li>Signature</li>
            <li>Certificate of Authenticity</li>
            <li>Year</li>
          </ul>
        </div>
        <div className="col-span-6 md:col-span-8">
          <ul className=" flex flex-col text-dark/70 justify-center gap-y-3 py-4">
            <li>{data.materials}</li>
            <li>{data.artwork_description || "N/A"}</li>
            <li>{data.artist_birthyear}</li>
            <li>{data.artist_country_origin}</li>
            <li>{data.framing}</li>
            <li>{data.signature}</li>
            <li>
              {data.certificate_of_authenticity === "Yes"
                ? "Included (Issued by Gallery)"
                : "Not available"}
            </li>
            <li>{data.year}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
