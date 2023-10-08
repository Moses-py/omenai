import { getApiUrl } from "@/config";
import CredentialsProvider from "next-auth/providers/credentials";

export const GalleryLoginProvider = CredentialsProvider({
  id: "gallery-login",
  name: "Credentials",
  type: "credentials",
  credentials: {},
  authorize: async (credentials) => {
    try {
      const url = getApiUrl();
      const response = await fetch(`${url}/api/auth/gallery/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      return { id: data.id, verified: data.verified };
    } catch (error: any) {
      console.log("ProviderError: ", error);
      throw new Error(error.message);
    }
  },
});
