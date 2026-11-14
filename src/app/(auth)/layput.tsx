import type { ReactNode } from "react";
import Link from "next/link";

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="flex flex-1 items-center justify-center bg-slate-950 px-6 py-12 text-white">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            TaskFlow
          </Link>
        </div>

        {children}
      </div>
    </main>
  );
}
