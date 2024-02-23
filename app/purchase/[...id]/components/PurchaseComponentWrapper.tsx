"use client";

import DesktopNavbar from "@/components/navbar/desktop/DesktopNavbar";
import { getApiUrl } from "@/config";
import { useSession } from "next-auth/react";
import { usePathname, useSearchParams, notFound } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useLocalStorage } from "usehooks-ts";
import AddressForm from "./AddressForm";
import DeliveryMethod from "./DeliveryMethod";
import ProductItem from "./ProductItem";
import { fetchUserData } from "@/services/requests/fetchUserData";
import { Session } from "next-auth";
import Loader from "@/components/loader/Loader";

export default function PurchaseComponentWrapper({
  artwork,
}: {
  artwork: ArtworkResultTypes;
}) {
  const router = useRouter();
  const route = usePathname();
  const url = getApiUrl();
  const session = useSession();
  const [redirect_uri, set_redirect_uri] = useLocalStorage(
    "redirect_uri_on_login",
    ""
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [address, setAddress] = useState<IndividualAddressTypes>({
    address_line: "",
    city: "",
    country: "",
    state: "",
    zip: "",
  });

  useEffect(() => {
    if (session === null || session.data?.user === undefined) {
      toast.error(
        "Unauthorized access detected. Please login to the appropriate account to view this page"
      );
      set_redirect_uri(`${url}${route}`);
      router.replace("/auth/login/individual");
    }
    if (session.data?.user !== undefined) {
      setIsLoggedIn(true);
      const fetchUser = async () => {
        const user = await fetchUserData(session.data!.user.id);
        setAddress(user.data.address);
      };

      fetchUser();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.data?.user]);

  if (!isLoggedIn)
    return (
      <div className="h-[90vh] w-full grid place-items-center">
        <Loader theme="dark" />
      </div>
    );

  return (
    <div>
      <div className="relative h-full">
        <DesktopNavbar />
        <div className="grid-cols-1 grid md:grid-cols-2 xl:grid-cols-3 my-[3rem] p-5 gap-x-2">
          <div className="col-span-1 xl:col-span-2">
            <DeliveryMethod />
            <AddressForm
              userAddress={address}
              gallery_id={artwork.gallery_id}
              art_id={artwork.art_id}
            />
          </div>
          <div className="cols-span-1">
            <ProductItem artwork={artwork} />
          </div>
        </div>
        {/* <AskForHelp /> */}
      </div>
    </div>
  );
}
