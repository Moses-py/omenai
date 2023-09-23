import Link from "next/link";

export default function Action() {
  return (
    <div className="absolute bottom-6 flex justify-between items-center w-full px-5 flex-col sm:flex-row md:flex-col lg:flex-row">
      <p className="font-medium text-base">
        Got an account? Gotcha!{" "}
        <Link href={"/auth/login/individual"} className="text-primary">
          Log in
        </Link>
      </p>
      <p className="font-medium text-base">
        Gallery?{" "}
        <Link href={"/auth/register/gallery"} className="text-primary">
          Sign up here
        </Link>
      </p>
    </div>
  );
}
