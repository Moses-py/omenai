import AuthProvider from "@/lib/auth/auth-provider";
import { nextAuthOptions } from "@/lib/auth/next-auth-options";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { Nunito_Sans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";
import "./globals.css";

import Providers from "@/react-query-provider/Provider";
import LoginModal from "@/components/modal/LoginModal";
import RecoveryModal from "@/components/modal/RecoveryModal";
import { OrderReceivedModal } from "@/components/modal/OrderConfirmedModal";

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito_sans",
  weight: ["300", "400", "500", "600", "700", "800"],
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
      <body className={`${nunito_sans.className} flex flex-col justify-center`}>
        <NextTopLoader color="#6246EA" height={6} />
        <Toaster richColors position="top-center" visibleToasts={1} />
        <AuthProvider session={session}>
          <Providers>
            <LoginModal />
            <RecoveryModal />
            <OrderReceivedModal />
            {children}
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
