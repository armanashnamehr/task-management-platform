import Link from "next/link";

export default function AppSidebar() {
  return (
    <aside className="w-64 shrink-0 border-r border-slate-800 p-6">
      <nav className="space-y-4 text-sm">
        <Link
          href="/dashboard"
          className="block text-white transition hover:text-blue-400"
        >
          Dashboard
        </Link>
        <Link
          href="/workspace"
          className="block text-late-400 transiton hover:text-blue-400"
        >
          Workspace
        </Link>
      </nav>
    </aside>
  );
}
