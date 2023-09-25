import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"/auth/register/individual"}>
        <button
          className={` rounded-full px-[1.5rem] py-[0.4rem] mt-[1rem] bg-secondary text-white hover:bg-secondary/30 transition-all ease-linear duration-200`}
          type={"button"}
        >
          Individual signup
        </button>
      </Link>
      <Link href={"/auth/register/gallery"}>
        <button
          className={` rounded-full px-[1.5rem] py-[0.4rem] mt-[1rem] bg-primary text-white hover:bg-secondary/30 transition-all ease-linear duration-200`}
          type={"button"}
        >
          Gallery signup
        </button>
      </Link>
    </main>
  );
}
