import { withAuth } from "next-auth/middleware";

import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    const token = req.nextauth.token;
    if (token && !token.verified) {
      return NextResponse.redirect(
        new URL(`/verify/individual/${token.id}`, req.url)
      );
    }
  },
  {
    pages: {
      signIn: "/",
    },
  }
);

export const config = { matcher: ["/dashboard"] };
