import { AppNavLink } from "./app-nav-link";

export function AppSidebar() {
  return (
    <aside className="hidden md:block w-64 shrink-0 border-r border-slate-800 p-6">
      <nav className="space-y-4 text-sm">
        {/** a client-side component is isolated here. */}
        <AppNavLink href="/dashboard">Dashboard</AppNavLink>
        <AppNavLink href="/workspace">Workspace</AppNavLink>
      </nav>
    </aside>
  );
}
// This is a Server Side Component.
// We can use a client-Side component here.
