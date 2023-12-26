import AuthProvider from "@/lib/auth/auth-provider";
import { nextAuthOptions } from "@/lib/auth/next-auth-options";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { Outfit, Raleway, Open_Sans, Nunito_Sans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";
import "./globals.css";
import HomeNavbar from "@/components/navbar/desktop/DesktopNavbar";
import DesktopNavbar from "@/components/navbar/desktop/DesktopNavbar";

const raleway = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-open_sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Omenai",
  description: "Omenai Homepage",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(nextAuthOptions);
  return (
    <html lang="en">
      <body className={`${raleway.className} flex flex-col justify-center`}>
        <NextTopLoader color="#6246EA" height={6} />
        <Toaster richColors position="top-center" visibleToasts={1} />
        <AuthProvider session={session}>{children}</AuthProvider>
      </body>
    </html>
  );
}
