import { getApiUrl } from "@/config";

export async function getIds(route: "individual" | "gallery") {
  try {
    const url = getApiUrl();
    const response = await fetch(`${url}/api/requests/${route}/getUserIds`, {
      next: { revalidate: 0 },
    }).then(async (res) => {
      if (!res.ok) return undefined;
      const result = await res.json();

      return result;
    });

    return response;
  } catch (error: any) {
    console.log(error);
  }
}
