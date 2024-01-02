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
          src={`/art_mediums/${tag}.jpg`}
          alt={`${tag} art image`}
          height={300}
          width={300}
          className="h-[300px] md:h-[400px] w-auto max-w-[300px] md:max-w-[390px] object-cover object-top"
        />
        <div className="flex flex-col">
          <span className="text-xs font-medium text-base-theme italic">
            Omenai picks
          </span>
          <Link
            href={"/"}
            className="md:text-[24px] text-[18px] text-dark font-semibold"
          >
            {name}
          </Link>
        </div>
      </div>
    </div>
  );
}
