import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workspaces",
};

export default function WorkspacesPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold">Workspaces</h1>

      <p className="mt-2 text-slate-400">
        Manage your workspaces and team members.
      </p>
    </section>
  );
}
