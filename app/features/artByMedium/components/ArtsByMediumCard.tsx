import Image from "next/image";
import Link from "next/link";

type ArtsByMediumCardProps = {
  name: string;
  tag: string;
};
export default function ArtsByMediumCard({ name, tag }: ArtsByMediumCardProps) {
  return (
    <div className="p-1">
      <div className="flex flex-col space-y-3 mb-[3rem]">
        <Image
          src={`/art_mediums/${tag}`}
          alt={`${tag} art image`}
          height={200}
          width={400}
          className="h-[200px] max-w-[400px] object-cover object-top"
        />
        <div className="flex flex-col">
          <span className="text-xs font-medium text-dark italic">
            Omenai picks
          </span>
          <Link
            href={"/"}
            className="md:text-[20px] text-base text-dark font-semibold"
          >
            {name}
          </Link>
        </div>
      </div>
    </div>
  );
}
