import { getApiUrl } from "@/config";

export async function updateLogo(payload: { id: string; url: string }) {
  const url = getApiUrl();

  const result = await fetch(`${url}/api/auth/gallery/logo`, {
    method: "POST",
    body: JSON.stringify({ ...payload }),
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
