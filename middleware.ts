import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { URLS } from "./constants/middleware_constants/urls";

const userDashboardRegex = /\/dashboard\/user\/.*/;
const galleryDashboardRegex = /\/dashboard\/gallery\/.*/;
const userLogin = /\/auth\/login\/individual\/.*/;
const galleryLogin = /\/auth\/login\/gallery\/.*/;
const galleryRegister = /\/auth\/register\/gallery\/.*/;
const userRegister = /\/auth\/register\/individial\/.*/;
const verifyPath = /\/verify\/.*/;

function redirect(url: string, request: NextRequest) {
  return NextResponse.redirect(new URL(url, request.url));
}
export async function middleware(request: NextRequest) {
  // const token = await getToken({
  //   req: request,
  //   secret: process.env.NEXTAUTH_SECRET,
  // });
  // if (token) {
  //   switch (token.role) {
  //     case "gallery":
  //       if (
  //         galleryLogin.test(request.url) ||
  //         galleryRegister.test(request.url)
  //       ) {
  //         return redirect(URLS.galleryOverview, request);
  //       } else if (userDashboardRegex.test(request.url)) {
  //         return redirect(URLS.userLogin, request);
  //       }
  //       break;
  //     case "user":
  //       if (userLogin.test(request.url) || userRegister.test(request.url)) {
  //         return redirect(URLS.userProfile, request);
  //       } else if (galleryDashboardRegex.test(request.url)) {
  //         return redirect(URLS.galleryLogin, request);
  //       }
  //       break;
  //   }
  //   if (verifyPath.test(request.url)) {
  //     return redirect(URLS.root, request);
  //   }
  // } else {
  //   if (userDashboardRegex.test(request.url)) {
  //     return redirect(URLS.userLogin, request);
  //   } else if (galleryDashboardRegex.test(request.url)) {
  //     return redirect(URLS.galleryLogin, request);
  //   }
  // }
  // return NextResponse.next();
}

// export const config = {
//   matcher: ["/dashboard/:path*", "/auth/:path*", "/verify/:path*"],
// };
