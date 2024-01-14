import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";
import FilterByTag from "./FilterByTag";

export default function FilterPackets() {
  return (
    <div className="">
      <div className="flex justify-between items-center mb-4">
        <h5>Filters</h5>
        <IoMdClose />
      </div>
      <hr className="border-dark/30" />
      {/* Key word search */}
      <div className="mt-4 mb-8">
        <h5>Keyword search</h5>
        <div className="relative my-2">
          <input
            type="text"
            className="w-full py-3 px-4 border-0 ring-1 ring-dark/30 focus:border-0 focus:ring-dark rounded-sm placeholder:text-base placeholder:font-light"
            placeholder="Enter a search term here"
          />
          <div className="absolute right-0 top-[50%] translate-y-[-50%] text-sm bg-white w-fit h-fit p-1">
            <CiSearch className="text-dark/70" />
          </div>
        </div>
      </div>
      <hr className="border-dark/30" />

      {/* Search by rarity */}
      <div className="mt-4 mb-8">
        <FilterByTag
          tag={"Rarity"}
          options={[
            "Unique",
            "Limited edition",
            "Open edition",
            "Unknown edition",
          ]}
        />
      </div>
      <hr className="border-dark/30" />

      <div className="mt-4 mb-8">
        <FilterByTag
          tag={"Medium"}
          options={[
            "Painting",
            "Photograpy",
            "Sculpture",
            "Prints",
            "Design",
            "Drawing",
            "Installation",
            "Perfomance art",
            "Reproduction",
          ]}
        />
      </div>
      <hr className="border-dark/30" />
      <button className="w-full bg-dark text-white py-4">Apply filters</button>
    </div>
  );
}
