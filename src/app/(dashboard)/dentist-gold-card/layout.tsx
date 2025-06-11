
import type { ReactNode } from "react";

export default function GoldCardLayout({ children }: { children: ReactNode }) {
    return (
      <div className=" min-h-screen bg-[#F4F5F7]">
          {children}
        </div>
    )
  }
  