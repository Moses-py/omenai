import Link from "next/link";
import TokenBlock from "./components/TokenBlock";
import { getIds } from "@/services/verify/getAllIds";
import { GalleryLogo } from "@/components/logo/Logo";

export const dynamicParams = false;
export default async function VerifyEmail({
  params,
}: {
  params: { token: string };
}) {
  // Check if gallery is verified and then redirect
  return (
    <div className="w-full h-full font-secondary p-5">
      <div className="container lg:w-50% my-4">
        {/* Header */}
        <div className="flex xxs:flex-row flex-col gap-y-4 justify-between items-center">
          <GalleryLogo />

          <Link href={"/auth/login/gallery"} className="underline">
            Back to login
          </Link>
        </div>
        <hr className="bg-gray-400/20 my-8" />
        {/* Body */}
        <TokenBlock token={params.token} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const result: Promise<any> = getIds("gallery");

  const results = await result;

  return results.map(
    (id: { _id: string; gallery_id: string; verified: boolean }) => {
      return {
        token: id.gallery_id,
      };
    }
  );
}
