import type { Metadata } from "next";
import { Open_Sans, Manrope } from "next/font/google";
import Footer from "./_components/footer";
import Navbar from "./_components/navbar";
import { cn } from "@/utils/helpers";

import "./globals.css";
import NavMask from "./_components/navMask";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Boldo",
  description: "Save time by building  fast with Boldo Template ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "antialiased scroll-smooth",
        openSans.variable,
        manrope.variable
      )}
    >
      <body className="relative">
        <NavMask className="absolute top-0 right-0 -z-10" />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
