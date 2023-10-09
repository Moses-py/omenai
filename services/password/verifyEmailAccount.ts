import { getApiUrl } from "@/config";

export async function verifyEmailAccount(
  route: RouteIdentifier,
  payload: { email: string }
) {
  const url = getApiUrl();

  const result = await fetch(`${url}/api/auth/${route}/reset`, {
    method: "POST",
    body: JSON.stringify({ recoveryEmail: payload.email }),
    headers: {
      "Content-type": "application/json",
    },
  }).then(async (res) => {
    const data: { message: string; id: string } = await res.json();
    const response = {
      isOk: res.ok,
      body: { message: data.message, id: data.id },
    };

    return response;
  });

  return result;
}
