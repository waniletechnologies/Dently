"use client";

import "./globals.css";
import { Work_Sans } from "next/font/google";
import { Inter } from "next/font/google";
import { Geist } from "next/font/google";

const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-workSans" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${workSans.variable} ${inter.variable} ${geist.variable}`}>
      <title>Dental Doctor</title>
      <body className={workSans.className}>
        {children}
      </body>
    </html>
  );
}
