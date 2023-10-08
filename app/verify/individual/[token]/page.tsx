import Link from "next/link";
import TokenBlock from "./components/TokenBlock";
import { getIds } from "@/services/verify/getAllIds";
import { IndividualLogo } from "@/components/logo/Logo";

export default async function VerifyEmail({
  params,
}: {
  params: { token: string };
}) {
  // Check if user is verified and then redirect
  return (
    <div className="w-full h-full font-secondary p-5">
      <div className="container lg:w-50% my-4">
        {/* Header */}
        <div className="flex xxs:flex-row flex-col gap-y-4 justify-between items-center">
          <IndividualLogo />

          <Link href={"/auth/login/individual"} className="underline">
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

// export async function generateStaticParams() {
//   const result: Promise<any> = getIds("individual");

//   const results = await result;

//   return results.map(
//     (id: { _id: string; user_id: string; verified: boolean }) => {
//       return {
//         token: id.user_id,
//       };
//     }
//   );
// }
