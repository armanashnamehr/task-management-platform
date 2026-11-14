import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <p className="mt-2 text-slate-400">Welcome to your TaskFlow workspace.</p>
    </section>
  );
}
