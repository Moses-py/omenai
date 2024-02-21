"use client";
import DesktopNavbar from "@/components/navbar/desktop/DesktopNavbar";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import {
  useSearchParams,
  usePathname,
  useRouter,
  notFound,
} from "next/navigation";
import { useLocalStorage } from "usehooks-ts";
import { getApiUrl } from "@/config";
import Loader from "@/components/loader/Loader";
import { toast } from "sonner";
import OrderDetails from "./OrderDetails";
export default function ComponentWrapper({ order_id }: { order_id: string }) {
  const router = useRouter();
  const session = useSession();
  const route = usePathname();
  const url = getApiUrl();
  const [redirect_uri, set_redirect_uri] = useLocalStorage(
    "redirect_uri_on_login",
    ""
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const searchParams = useSearchParams();
  const user_id_key = searchParams.get("id_key");

  useEffect(() => {
    if (user_id_key === "" || undefined) return notFound();
    if (
      session.data?.user === undefined ||
      session.data?.user.id !== user_id_key
    ) {
      toast.error(
        "Unauthorized access detected. Please login to the appropriate account to view this page"
      );
      set_redirect_uri(`${url}${route}?id_key=${user_id_key}`);
      router.replace("/auth/login/individual");
    } else {
      setIsLoggedIn(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session.data?.user, user_id_key]);

  return (
    <div className="w-full h-screen">
      {isLoggedIn ? (
        <>
          <DesktopNavbar />
          <div className="">
            <OrderDetails order_id={order_id} />
          </div>
        </>
      ) : (
        <div className="w-full h-screen grid place-items-center">
          <Loader theme="dark" />
        </div>
      )}
    </div>
  );
}
