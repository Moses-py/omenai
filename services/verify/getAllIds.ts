import { getApiUrl } from "@/config";

export async function getIds(route: "individual" | "gallery") {
  try {
    const url = getApiUrl();
    const response = await fetch(
      `${url}/api/requests/${route}/getUserIds`
    ).then((res) => {
      if (!res.ok) undefined;

      return res.json();
    });

    return response;
  } catch (error: any) {
    console.log(error);
  }
}
