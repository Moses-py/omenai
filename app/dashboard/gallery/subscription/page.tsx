"use client";
import { gallerySubscriptionStore } from "@/store/gallery/gallery_subscriptions/GallerySubscriptions";
import NoSubscriptionTheme from "./features/NoSubscriptionTheme";
import SubscriptionActiveTheme from "./features/SubscriptionActiveTheme";
import TogglePage from "./features/components/TogglePage";
export default function Subscription() {
  const [toggle] = gallerySubscriptionStore((state) => [state.toggle]);
  return (
    <div className="w-full h-full relative">
      {toggle ? <SubscriptionActiveTheme /> : <NoSubscriptionTheme />}

      <div className="absolute top-0 right-0">
        <TogglePage />
      </div>
    </div>
  );
}
