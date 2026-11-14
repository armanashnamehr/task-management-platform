import Link from "next/link";
import { AppMobileNavigation } from "./app-mobile-navigation";

//This is a server component, even though it imports a client-side component.
export function AppHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-800 px-4 md:px-6">
      <div className="flex items-center gap-3">
        <AppMobileNavigation />

        <Link href="/dashboard" className="text-xl font-bold tracking-tight">
          TaskFlow
        </Link>
      </div>

      <div className="hidden text-sm text-slate-400 sm:block">
        Application Workspace
      </div>
    </header>
  );
}
