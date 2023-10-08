import { getApiUrl } from "@/config";

export async function getIds(route: "individual" | "gallery") {
  try {
    const url = getApiUrl();
    const response = await fetch(`${url}/api/requests/${route}/getUserIds`, {
      next: { revalidate: 0 },
    }).then(async (res) => {
      if (!res.ok) undefined;
      const result = await res.json();

      const params_list = result.ids.filter((id: any) => {
        return id.verified !== true;
      });

      return params_list;
    });

    return response;
  } catch (error: any) {
    console.log(error);
  }
}
