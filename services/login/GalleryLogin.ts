import { getApiUrl } from "@/config";
import CredentialsProvider from "next-auth/providers/credentials";

export const GalleryLoginProvider = CredentialsProvider({
  id: "gallery-login",
  name: "Credentials",
  type: "credentials",
  credentials: {},

  authorize: async (credentials) => {
    const url = getApiUrl();
    try {
      const response = await fetch(`${url}/api/auth/gallery/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message);

      return { id: data.id, verified: data.verified, type: data.type };
    } catch (error: any) {
      console.log("ProviderError: ", error);
      throw new Error(error.message);
    }
  },
});
