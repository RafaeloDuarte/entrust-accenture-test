import type { PropsWithChildren } from "react";
import { Header } from "./header/Header";

export function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex-1 flex flex-col h-screen">
      <Header />
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  )
}
