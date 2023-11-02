import AuthProvider from "@/lib/auth/auth-provider";
import { nextAuthOptions } from "@/lib/auth/next-auth-options";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { Outfit } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
      <body className={`${outfit.className} flex flex-col justify-center`}>
        <NextTopLoader color="#6246EA" height={6} />
        <Toaster richColors position="top-center" visibleToasts={1} />
        <AuthProvider session={session}>{children}</AuthProvider>
      </body>
    </html>
  );
}
