import { getApiUrl } from "@/config";
import CredentialsProvider from "next-auth/providers/credentials";
import { RedirectType, redirect } from "next/navigation";
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

      if (!response.ok) throw new Error(data.message);

      return { id: data.id, verified: data.verified, type: data.type };
    } catch (error: any) {
      console.log(error);
      throw new Error(error.message);
    }
  },
});
