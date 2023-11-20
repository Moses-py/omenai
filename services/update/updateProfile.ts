import { getApiUrl } from "@/config";
import { nextAuthOptions } from "@/lib/auth/next-auth-options";
import { getServerSession } from "next-auth";

export async function updateProfile(
  route: RouteIdentifier,
  payload: GalleryProfileUpdateData,
  id: string
) {
  const url = getApiUrl();

  const result = await fetch(`${url}/api/update/${route}/profile`, {
    method: "POST",
    body: JSON.stringify({ ...payload, id }),
    headers: {
      "Content-type": "application/json",
    },
  }).then(async (res) => {
    const data: { message: string } = await res.json();
    const response = {
      isOk: res.ok,
      body: { message: data.message },
    };

    return response;
  });

  return result;
}
