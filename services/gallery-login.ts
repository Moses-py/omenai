import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";

export const GalleryLoginProvider = CredentialsProvider({
  id: "gallery-login",
  name: "Credentials",
  type: "credentials",
  credentials: {},
  authorize: async (credentials) => {
    try {
      const schema = z.object({
        email: z
          .string({
            required_error: "Email address must be provided",
          })
          .email(),
        password: z
          .string({
            required_error: "Password must be provided",
          })
          .min(8, "Password must be at least 8 characters"),
      });

      const saveParse = schema.safeParse(credentials);

      if (!saveParse.success) throw new Error("Something went wrong");

      const response = await fetch("/api/gallery-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(saveParse.data),
      });

      const data = await response.json();

      return {
        id: data.uid,
        ...data,
      };
    } catch (error) {
      console.log(error);
    }
  },
});
