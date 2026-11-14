import type { Metadata } from "next";
import Link from "next/link";

import { LoginForm } from "@/features/auth/components/login-form";

export const metadata: Metadata = {
  title: "Sign in",
};
/**This is a @Server-component that renders a client component */
export default function LoginPage() {
  return (
    <>
      <LoginForm />

      <p className="mt-6 text-center text-sm text-slate-400">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-blue-400 transition hover:text-blue-300"
        >
          Create one
        </Link>
      </p>
    </>
  );
}
