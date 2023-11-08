import Image from "next/image";
import { FormCard } from "./components/FormCard";
export default function GalleryInfo() {
  return (
    <div>
      <div className="flex gap-3 items-center my-5 cursor-pointer">
        <div className="h-[60px] w-[60px] rounded-full bg-[#eee] flex items-center justify-center">
          <Image
            src="/icons/profile.png"
            alt="icon"
            width={24}
            height={24}
            className=""
          />
        </div>
        <p className="text-base-theme px-5 lg:px-2 underline">
          Add a profile image
        </p>
      </div>

      <FormCard />
    </div>
  );
}
