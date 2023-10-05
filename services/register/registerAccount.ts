import { getApiUrl } from "@/config";

export async function registerAccount(
  payload: IndividualRegisterData | GalleryRegisterData,
  route: "gallery" | "individual"
) {
  const url = getApiUrl();
  const result = await fetch(`${url}/api/auth/${route}/register`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-type": "application/json",
    },
  }).then(async (res) => {
    const response = {
      isOk: res.ok,
      body: await res.json(),
    };

    return response;
  });

  return result;
}
