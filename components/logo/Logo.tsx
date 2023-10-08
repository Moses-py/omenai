import Link from "next/link";
import Image from "next/image";
export const GalleryLogo = () => {
  return (
    <>
      <Link
        href={"/"}
        className="flex flex-col xxs:flex-row xxs:gap-1 items-end relative"
      >
        <Image
          src={"/omenai_logo.png"}
          alt="omenai logo"
          width={150}
          height={30}
        />
        <span className="font-medium text relative xxs:top-1">
          For Galleries
        </span>
      </Link>
    </>
  );
};

export const IndividualLogo = () => {
  return (
    <>
      <Link href={"/"} className="flex gap-1 items-end">
        <Image
          src={"/omenai_logo.png"}
          alt="omenai logo"
          width={150}
          height={30}
        />
      </Link>
    </>
  );
};
