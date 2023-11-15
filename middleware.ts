import { getToken } from "next-auth/jwt";
import { signOut } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";

const userDashboardRegex = new RegExp("/dashboard/user/*");
const galleryDashboardRegex = new RegExp("/dashboard/gallery/*");
const userLogin = new RegExp("/auth/login/individual/*");
const galleryLogin = new RegExp("/auth/login/gallery/*");
const galleryRegister = new RegExp("/auth/register/gallery/*");
const userRegister = new RegExp("/auth/register/individial/*");
const verifyPath = new RegExp("/verify/*");

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (token) {
    if (token.role === "gallery") {
      if (galleryLogin.test(request.url) || galleryRegister.test(request.url)) {
        return NextResponse.redirect(
          new URL("/dashboard/gallery/overview", request.url)
        );
      } else if (userDashboardRegex.test(request.url)) {
        return NextResponse.redirect(
          new URL("/auth/login/individual", request.url)
        );
      }
    } else if (token.role === "user") {
      if (userLogin.test(request.url) || userRegister.test(request.url)) {
        return NextResponse.redirect(
          new URL("/dashboard/user/profile", request.url)
        );
      } else if (galleryDashboardRegex.test(request.url)) {
        return NextResponse.redirect(
          new URL("/auth/login/gallery", request.url)
        );
      }
    }
    if (verifyPath.test(request.url)) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    if (userDashboardRegex.test(request.url)) {
      return NextResponse.redirect(
        new URL("/auth/login/individual", request.url)
      );
    } else if (galleryDashboardRegex.test(request.url)) {
      return NextResponse.redirect(new URL("/auth/login/gallery", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*", "/verify/:path*"],
};
