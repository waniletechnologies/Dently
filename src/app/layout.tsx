"use client";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/Header";
import "./globals.css";
import { Work_Sans } from "next/font/google";
import { SidebarProvider } from "@/contexts/SidebarContext";

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
      <body className={`${workSans.className} bg-[#f9f8fa] overflow-hidden`}>
        <SidebarProvider>
          <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
              <Header />
              <main className="flex-1 bg-[#f4f5f7]a overflow-auto">
                {children}
              </main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
