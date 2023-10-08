import { GalleryLoginProvider } from "@/services/login/GalleryLogin";
import { IndividualLoginProvider } from "@/services/login/IndividualLogin";
import { NextAuthOptions } from "next-auth";

export const nextAuthOptions: NextAuthOptions = {
  session: { strategy: "jwt", maxAge: 3600 },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [IndividualLoginProvider, GalleryLoginProvider],
  pages: {
    signIn: "/",
  },
  callbacks: {
    async jwt({ token, user }: any) {
      return { ...token, ...user };
    },
    async session({ session, token }: any) {
      session.user = token as any;

      return session;
    },
  },
};
