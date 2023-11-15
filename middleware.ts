import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const userDashboardRegex = /\/dashboard\/user\/.*/;
const galleryDashboardRegex = /\/dashboard\/gallery\/.*/;
const userLogin = /\/auth\/login\/individual\/.*/;
const galleryLogin = /\/auth\/login\/gallery\/.*/;
const galleryRegister = /\/auth\/register\/gallery\/.*/;
const userRegister = /\/auth\/register\/individial\/.*/;
const verifyPath = /\/verify\/.*/;

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (token) {
    if (token.role === "gallery") {
      return handleGalleryRole(request);
    } else if (token.role === "user") {
      return handleUserRole(request);
    }
    if (verifyPath.test(request.url)) {
      return handleVerifyPath(request);
    }
  } else {
    if (userDashboardRegex.test(request.url)) {
      return handleUserDashboard(request);
    } else if (galleryDashboardRegex.test(request.url)) {
      return handleGalleryDashboard(request);
    }
  }

  return NextResponse.next();
}

function handleGalleryRole(request: NextRequest) {
  if (galleryLogin.test(request.url) || galleryRegister.test(request.url)) {
    return NextResponse.redirect(
      new URL("/dashboard/gallery/overview", request.url)
    );
  } else if (userDashboardRegex.test(request.url)) {
    return NextResponse.redirect(
      new URL("/auth/login/individual", request.url)
    );
  }
}

function handleUserRole(request: NextRequest) {
  if (userLogin.test(request.url) || userRegister.test(request.url)) {
    return NextResponse.redirect(
      new URL("/dashboard/user/profile", request.url)
    );
  } else if (galleryDashboardRegex.test(request.url)) {
    return NextResponse.redirect(new URL("/auth/login/gallery", request.url));
  }
}

function handleVerifyPath(request: NextRequest) {
  return NextResponse.redirect(new URL("/", request.url));
}

function handleUserDashboard(request: NextRequest) {
  return NextResponse.redirect(new URL("/auth/login/individual", request.url));
}

function handleGalleryDashboard(request: NextRequest) {
  return NextResponse.redirect(new URL("/auth/login/gallery", request.url));
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*", "/verify/:path*"],
};
