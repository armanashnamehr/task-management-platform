import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { PageHeading } from "@/components/ui/page-heading";

export const metadata: Metadata = {
  title: "Workspaces",
};

export default function WorkspacesPage() {
  return (
    <section>
      <PageHeading
        title="Workspaces"
        description="Manage your workspaces and team members."
      />

      <Card>
        <div className="py-8 text-center">
          <h2 className="text-lg font-semibold">No workspaces yet</h2>

          <p className="mt-2 text-sm text-slate-400">
            Your workspaces will appear here once you create or join one.
          </p>
        </div>
      </Card>
    </section>
  );
}
