import Link from "next/link";

import { IndividualLogo } from "@/components/logo/Logo";
import PasswordBlock from "./components/PasswordBlock";

export default async function ResetPassword({
  params,
}: {
  params: { id: string };
}) {
  // Check if user is verified and then redirect
  return (
    <div className="w-full h-full font-dark p-5">
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
