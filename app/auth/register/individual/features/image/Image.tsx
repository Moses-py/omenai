import Image from "next/image";

export default function ImageBlock() {
  return (
    <aside className="h-full w-full relative flex-1 hidden md:block">
      <Image
        src={"/signup_individual_1.jpg"}
        alt="sign up image block"
        width={500}
        height={500}
        className="absolute inset-0 w-full h-full object-center object-cover"
      />
    </aside>
  );
}
