import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Omenai",
  description: "Omenai Homepage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <NextTopLoader color="#6246EA" height={6} />
        <Toaster richColors position="top-center" visibleToasts={1} />
        {children}
      </body>
    </html>
  );
}
