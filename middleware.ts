import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    const token = req.nextauth.token;
    const pathname = req.nextUrl.pathname;

    if (token) {
      if (pathname === "/" || isPublicRoutes(pathname)) {
        return NextResponse.redirect(new URL(`/dashboard`, req.url));
      }
      if (!token.verified) {
        const url = new URL(`/verify/${token.type}/${token.id}`, req.url);
        return NextResponse.redirect(url);
      }
    }
  },
  {
    pages: {
      signIn: "/",
    },
  }
);

const isPublicRoutes = (pathname: string): boolean => {
  const publicRoutes: string[] = ["/auth", "/verify"];
  const isMatch = publicRoutes.find((r) => r.startsWith(pathname));

  if (!isMatch) return false;
  return true;
};

export const config = { matcher: ["/dashboard"] };
