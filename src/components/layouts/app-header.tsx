import Link from "next/link";

export default function AppHeader() {
  return (
    <header>
      <Link href="/dashbaord" className="text-xl font-bold tracking-tight">
        Task Flow
      </Link>
      <div>Application Workspace</div>
    </header>
  );
}
