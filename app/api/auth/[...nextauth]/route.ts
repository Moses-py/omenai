import { GalleryLoginProvider } from "@/services/gallery-login";
import { IndividualLoginProvider } from "@/services/individual-login";
import nextAuth, { type NextAuthOptions } from "next-auth";

const authOptions: NextAuthOptions = {
  session: { strategy: "jwt", maxAge: 3600 },
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

const handler = nextAuth(authOptions);

export { handler as GET, handler as POST };
