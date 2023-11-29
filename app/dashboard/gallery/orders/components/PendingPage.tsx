import Image from "next/image";
import Link from "next/link";

export default function Pending() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-x-12 items-center">
        <div>
          <Image
            src={"/images/3.jpeg"}
            alt="image-3"
            height={60}
            width={70}
            className="rounded-lg"
          />
        </div>
        <div className="text-base-theme">
          <p className="text-primary">Aurora borealis 1999 circa</p>
          <p>Leonado Da Vinci</p>
          <p>$1200</p>
        </div>
      </div>
      <div className="text-primary">
        <p>Jonathan Wick</p>
        <p className="text-base-theme">30th Oct 07:35pm</p>
        <Link href={"/"} className="underline">
          View
        </Link>
      </div>
    </div>
  );
}
