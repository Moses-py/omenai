import { nextAuthOptions } from "@/lib/auth/next-auth-options";
// import { GalleryLoginProvider } from "@/services/login/GalleryLogin";
// import { IndividualLoginProvider } from "@/services/login/IndividualLogin";
import nextAuth from "next-auth";

const handler = nextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
