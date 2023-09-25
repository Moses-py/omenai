import Image from "next/image";

export default function ImageBlock() {
  return (
    <aside className="h-full w-full relative flex-1 hidden md:block rounded-xl">
      <Image
        src={"/login_individual.jpg"}
        alt="login image block"
        width={500}
        height={500}
        className="absolute inset-0 w-full h-full object-center object-cover rounded-tl-xl rounded-bl-xl"
      />
    </aside>
  );
}
