"use client";

import "./globals.css";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-workSans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={workSans.variable}>
      <title>Dental Doctor</title>
      <body className={workSans.className}>
        {children}
      </body>
    </html>
  );
}
