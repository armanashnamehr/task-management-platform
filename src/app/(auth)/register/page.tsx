import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create account",
};

export default function RegisterPage() {
  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900 p-8">
      <h1 className="text-2xl font-semibold">Create your account</h1>

      <p className="mt-2 text-sm text-slate-400">
        Get started with your new workspace.
      </p>

      <div className="mt-8 text-sm text-slate-400">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-blue-400 hover:text-blue-300"
        >
          Sign in
        </Link>
      </div>
    </section>
  );
}
