import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anupraj Varma",
  description: "Anupraj Varma's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full flex flex-col justify-center items-center bg-[url('/topography.svg')]`}
      >
        <div className="sm:w-[55rem] flex flex-col gap-8 py-8 w-full bg-black">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
