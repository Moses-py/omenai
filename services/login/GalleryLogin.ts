import CredentialsProvider from "next-auth/providers/credentials";

export const GalleryLoginProvider = CredentialsProvider({
  id: "gallery-login",
  name: "Credentials",
  type: "credentials",
  credentials: {},
  authorize: async (credentials) => {
    try {
      const response = await fetch("/api/auth/gallery/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      return { id: data.id };
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
});
