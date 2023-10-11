import { getApiUrl } from "@/config";
import CredentialsProvider from "next-auth/providers/credentials";
type Input = {
  email: string;
  password: string;
  ip: string;
};

type Credentials = Record<keyof Input, any>;
export const GalleryLoginProvider = CredentialsProvider<Credentials>({
  id: "gallery-login",
  name: "Credentials",
  type: "credentials",
  credentials: {
    email: {},
    password: {},
    ip: {},
  },

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

      return { id: data.id, verified: data.verified };
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
});
