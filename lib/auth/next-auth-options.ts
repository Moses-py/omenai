import { GalleryLoginProvider } from "@/services/login/GalleryLogin";
import { IndividualLoginProvider } from "@/services/login/IndividualLogin";
import { NextAuthOptions, getServerSession } from "next-auth";

export const nextAuthOptions: NextAuthOptions = {
  session: { strategy: "jwt", maxAge: 3600 },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [IndividualLoginProvider, GalleryLoginProvider],
  pages: {
    signIn: "/",
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update") return { ...token, ...session.user };
      return { ...token, ...user };
    },
    async session({ session, token }: any) {
      session.user = token as any;

      return session;
    },
    async signIn() {
      const session = await getServerSession(nextAuthOptions);

      if (session?.user && !session?.user.verified) {
        // return `/verify/gallery/${session?.user.id}`;
        return false;
      } else {
        // Return false to display a default error message
        return true;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
};
