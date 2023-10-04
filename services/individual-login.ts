import { handleErrorEdgeCases } from "@/custom/errors/handler/errorHandler";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

export const IndividualLoginProvider = CredentialsProvider({
  id: "individual-login",
  name: "Credentials",
  type: "credentials",
  credentials: {},
  authorize: async (credentials) => {
    try {
      const response = await fetch("/api/auth/login/individual", {
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
