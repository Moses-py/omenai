import Link from "next/link";
import Image from "next/image";
import TokenBlock from "./components/TokenBlock";

export const dynamicParams = false;
export default async function VerifyEmail({
  params,
}: {
  params: { token: string };
}) {
  // Check if user is verified and then redirect
  return (
    <div className="w-full h-[100vh] grid place-items-center">
      <div className="flex flex-col gap-5 items-center p-5">
        <Link href={"/"}>
          <Image
            src={"/omenai_logo.png"}
            alt="omenai logo"
            width={200}
            height={60}
          />
        </Link>

        <TokenBlock token={params.token} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  try {
    const result = await fetch(
      "http://localhost:3000/api/requests/individual/getUserIds",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());
    if (!result || !result.ids) {
      throw new Error("Failed to fetch user ids");
    }

    return result.ids.map((id: { _id: string; user_id: string }) => ({
      token: id.user_id,
    }));
  } catch (error: any) {
    console.log(error);
  }
}
