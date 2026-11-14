import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { PageHeading } from "@/components/ui/page-heading";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <section>
      <PageHeading
        title="Dashboard"
        description="Get an overview of your work and recent activity."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <Card>
          <p className="text-sm text-slate-400">Workspaces</p>
          <p className="mt-3 text-3xl font-bold">0</p>
          <p className="mt-2 text-sm text-slate-500">
            Workspaces you belong to
          </p>
        </Card>

        <Card>
          <p className="text-sm text-slate-400">Projects</p>
          <p className="mt-3 text-3xl font-bold">0</p>
          <p className="mt-2 text-sm text-slate-500">
            Projects across your workspaces
          </p>
        </Card>

        <Card>
          <p className="text-sm text-slate-400">Assigned tasks</p>
          <p className="mt-3 text-3xl font-bold">0</p>
          <p className="mt-2 text-sm text-slate-500">Tasks assigned to you</p>
        </Card>
      </div>
    </section>
  );
}
