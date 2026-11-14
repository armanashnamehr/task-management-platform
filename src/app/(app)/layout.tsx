import type { ReactNode } from "react";
import AppHeader from "@/components/layouts/app-header";
import AppSider from "@/components/layouts/app-sidebar";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex flex-1 flex-col bg-slate-950 text-white">
      <AppHeader />
      <div className="flex flex-1">
        <AppSider />
        <main className="min-w-0 flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
