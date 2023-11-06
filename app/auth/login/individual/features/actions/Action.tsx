import Link from "next/link";

export default function Action() {
  return (
    <div className="sm:absolute bottom-6 flex justify-between items-center w-full px-4 my-[1rem] text-center flex-col sm:flex-row md:flex-col lg:flex-row">
      <p className="font-normal text-base">
        Need an account?{" "}
        <Link href={"/auth/register/individual"} className="text-dark">
          Create one
        </Link>
      </p>
      <p className="font-normal text-base">
        Gallery?{" "}
        <Link href={"/auth/login/gallery"} className="text-dark">
          Login
        </Link>
      </p>
    </div>
  );
}
