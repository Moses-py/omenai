import Link from "next/link";
import EditorialsGrid from "./components/EditorialsGrid";

export default function Editorials({ editorials }: { editorials: any }) {
  return (
    <div className="p-2 relative my-[10rem]">
      <div className="flex justify-between items-center">
        <h1 className="text-dark font-normal text-[20px] sm:text-md">
          Omenai editorials
        </h1>
        <Link
          href={""}
          className="text-dark font-normal sm:text-base underline break-words"
        >
          View all editorials
        </Link>
      </div>
      <EditorialsGrid editorials={editorials} />
    </div>
  );
}
