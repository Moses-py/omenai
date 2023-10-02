import { GalleryLoginProvider } from "@/services/gallery-login";
import { IndividualLoginProvider } from "@/services/individual-login";
import nextAuth, { type NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },

  secret: process.env.NEXTAUTH_SECRET,
  providers: [IndividualLoginProvider, GalleryLoginProvider],

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;

      return session;
    },
  },
};

export default nextAuth(authOptions);
