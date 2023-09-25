import Link from "next/link";

export default function Action() {
  return (
    <div className="sm:absolute bottom-6 flex justify-between items-center w-full px-4 my-[1rem] text-center flex-col sm:flex-row md:flex-col lg:flex-row">
      <p className="font-medium text-base">
        Need an account?{" "}
        <Link href={"/auth/register/individual"} className="text-primary">
          Create one
        </Link>
      </p>
      <p className="font-medium text-base">
        Gallery?{" "}
        <Link href={"/auth/login/gallery"} className="text-primary">
          Login
        </Link>
      </p>
    </div>
  );
}
