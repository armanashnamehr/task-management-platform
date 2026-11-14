import type { ReactNode } from "react";

type PageHeadingProps = {
  title: string;
  description?: string;
  /** ReactNode is a broad type representing content React can render. It includes elements, strings, numbers, fragments, and more.

This allows the parent page to decide what action belongs in the heading.

For example, the Workspaces page might provide a Create Workspace button, while the Dashboard might not provide any action at all.  */
  actions?: ReactNode;
};
type PageHeadingProps2 = {
  title: string;
  description: string;
  actions?: ReactNode;
};

export function PageHeading2({
  title,
  description,
  actions,
}: PageHeadingProps2) {}
export function PageHeading({ title, description, actions }: PageHeadingProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {title}
        </h1>

        {description && (
          <p className="mt-2 text-sm text-slate-400">{description}</p>
        )}
      </div>

      {actions && (
        <div className="flex shrink-0 items-center gap-3">{actions}</div>
      )}
    </div>
  );
}
