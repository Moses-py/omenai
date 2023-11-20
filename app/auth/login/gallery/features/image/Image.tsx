"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ImageBlock() {
  const router = useRouter();

  const session = useSession();

  useEffect(() => {
    if (session?.data?.user) {
      router.replace("/dashboard/gallery/overview");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <aside className="h-full w-full relative flex-1 hidden md:block rounded-xl">
      <Image
        src={"/login_gallery_6.jpg"}
        alt="login image block"
        width={500}
        height={500}
        className="absolute inset-0 w-full h-full object-center object-cover rounded-tl-xl rounded-bl-xl"
      />
    </aside>
  );
}
