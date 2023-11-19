import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { URLS } from "./constants/middleware_constants/urls";

const userDashboardRegex = /\/dashboard\/user\/.*/;
const galleryDashboardRegex = /\/dashboard\/gallery\/.*/;
const userLogin = /\/auth\/login\/individual\/.*/;
const galleryLogin = /\/auth\/login\/gallery\/.*/;

function redirect(url: string, request: NextRequest) {
  return NextResponse.redirect(new URL(url, request.url));
}
export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isUserDashboard = userDashboardRegex.test(request.url);
  const isGalleryDashboard = galleryDashboardRegex.test(request.url);
  const isUserLogin = userLogin.test(request.url);
  const isGalleryLogin = galleryLogin.test(request.url);

  if (token) {
    switch (token.role) {
      case "user":
        if (isGalleryDashboard) {
          return redirect(URLS.userLogin, request);
        } else if (isUserLogin) {
          return redirect(URLS.userDashboard, request);
        }
        break;
      case "gallery":
        if (isUserDashboard) {
          return redirect(URLS.galleryLogin, request);
        } else if (isGalleryLogin) {
          return redirect(URLS.galleryDashboard, request);
        }
        break;
    }
  } else {
    if (isUserDashboard) {
      return redirect(URLS.userLogin, request);
    } else if (isGalleryDashboard) {
      return redirect(URLS.galleryLogin, request);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*", "/verify/:path*"],
};
