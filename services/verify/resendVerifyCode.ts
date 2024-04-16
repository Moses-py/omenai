import { getApiUrl } from "@/config";
import { toast } from "sonner";

export async function resendCode(
  route: "individual" | "gallery",
  payload: { author: string }
) {
  try {
    const url = getApiUrl();

    await fetch(`${url}/api/requests/${route}/verify/resend`, {
      method: "POST",
      body: JSON.stringify({gallery_id: payload.author}),
      headers: {
        "Content-type": "application/json",
      },
    }).then(async (res) => {
      const response: { isOk: boolean; body: { message: string } } = {
        isOk: res.ok,
        body: await res.json(),
      };

      if (!res.ok) {
        toast.error(response.body.message);
      } else {
        toast.success(response.body.message);
      }
    });
  } catch (error: any) {
    console.log(error);
  }
}
