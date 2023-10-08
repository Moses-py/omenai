import { getApiUrl } from "@/config";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

type Input = {
  email: string;
  password: string;
};

type Credentials = Record<keyof Input, any>;

export const IndividualLoginProvider = CredentialsProvider<Credentials>({
  id: "individual-login",
  name: "Credentials",
  type: "credentials",
  credentials: {
    email: {},
    password: {},
  },
  authorize: async (credentials, req) => {
    try {
      if (!credentials) throw new Error("Credentials Required");

      const url = getApiUrl();

      const response = await fetch(`${url}/api/auth/individual/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });

      const data = await response.json();

      return { id: data.id };
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
});
