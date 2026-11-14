import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign in",
};

export default function LoginPage() {
  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900 p-8">
      <h1 className="text-2xl font-semibold">Welcome back</h1>

      <p className="mt-2 text-sm text-slate-400">
        Sign in to continue to your workspace.
      </p>

      <div className="mt-8 text-sm text-slate-400">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-blue-400 hover:text-blue-300"
        >
          Create one
        </Link>
      </div>
    </section>
  );
}
