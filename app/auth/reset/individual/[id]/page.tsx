import Link from "next/link";

import { IndividualLogo } from "@/components/logo/Logo";
import PasswordBlock from "./components/PasswordBlock";
import { getAllTokens } from "@/services/verify/getAllTokens";

export default async function ResetPassword({
  params,
}: {
  params: { id: string };
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
        <PasswordBlock token={params.id} />
      </div>
    </div>
  );
}

// export async function generateStaticParams() {
//   const result: Promise<any> = getAllTokens();

//   const results = await result;
//   if (results === undefined) {
//     return [].map(() => {
//       return {
//         id: "",
//       };
//     });
//   } else {
//     return results.tokens.map((token: any) => {
//       return {
//         id: token.code,
//       };
//     });
//   }
// }

// export const revalidate = 1;
