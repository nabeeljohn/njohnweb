import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainFooter from "@/appcomponents/mainfooter";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata
export const metadata: Metadata = {
  title: "NJohn Web",
  description: "Personal website of Nabeel John",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-700 text-gray-100 flex flex-col min-h-screen`}
>
        {/* Main content grows to fill space between header and footer */}
        <main className="flex-1">
          {children}
        </main>

        <MainFooter />
      </body>
    </html>
  );
}
