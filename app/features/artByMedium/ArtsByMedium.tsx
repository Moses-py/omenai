import ArtsByMediumCard from "./components/ArtsByMediumCard";

export default function ArtsByMedium() {
  return (
    <div className=" mt-8 p-4 relative mb-[4rem]">
      <h1 className="text-dark font-normal text-[20px] sm:text-md mb-8">
        Omenai Picks: Arts by Medium
      </h1>

      <div className="flex overflow-x-scroll w-full space-x-2">
        {medium_arts.map((medium, index) => {
          return (
            <ArtsByMediumCard key={index} name={medium.name} tag={medium.tag} />
          );
        })}
      </div>
    </div>
  );
}

const medium_arts = [
  { name: "Painting", tag: "painting" },
  { name: "Drawing", tag: "drawing" },
  { name: "Sculpture", tag: "sculpture" },
  { name: "Textile Arts", tag: "textile" },
  { name: "Photography", tag: "photography" },
];
