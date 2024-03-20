"use client";
import NoSubscriptionBlock from "../components/NoSubscriptionBlock";
import NoVerificationBlock from "../components/NoVerificationBlock";
import UploadArtworkDetails from "./features/UploadArtworkDetails";
import { useSession } from "next-auth/react";

export default function UploadArtwork() {
  const session = useSession();
  return (
    <div className="relative">
      {!session?.data?.user.gallery_verified &&
        !session?.data?.user.subscription_active && <NoVerificationBlock />}
      {session?.data?.user.gallery_verified &&
        !session?.data?.user.subscription_active && <NoSubscriptionBlock />}
      {!session?.data?.user.gallery_verified &&
        session?.data?.user.subscription_active && <NoVerificationBlock />}
      {session?.data?.user.gallery_verified &&
        session.data.user.subscription_active && (
          <div className="px-5 py-0">
            <h1 className="text-dark font-bold text-sm">Upload an artwork</h1>
            <UploadArtworkDetails />
          </div>
        )}
    </div>
  );
}
