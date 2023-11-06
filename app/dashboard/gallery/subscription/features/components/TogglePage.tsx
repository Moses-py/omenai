"use client";

import { gallerySubscriptionStore } from "@/store/gallery/gallery_subscriptions/GallerySubscriptions";
import { ToggleSwitch } from "flowbite-react";

export default function TogglePage() {
  const [toggle, updateToggle] = gallerySubscriptionStore((state) => [
    state.toggle,
    state.updateToggle,
  ]);

  return (
    <div className="flex max-w-md flex-col gap-4">
      <ToggleSwitch
        checked={toggle}
        label="Toggle me"
        onChange={() => updateToggle()}
        className="text-base"
      />
    </div>
  );
}
