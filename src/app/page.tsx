import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-slate-950 px-6 py-8 text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col">
        <header className="flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            TaskFlow
          </Link>

          <nav className="flex items-center gap-6 text-sm text-slate-300">
            <Link href="/login" className="transition hover:text-white">
              Sign in
            </Link>

            <Link
              href="/register"
              className="rounded-lg bg-white px-4 py-2 font-medium text-slate-950 transition hover:bg-slate-200"
            >
              Get started
            </Link>
          </nav>
        </header>

        <section className="flex flex-1 flex-col items-center justify-center text-center">
          <p className="mb-5 rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
            A better way to manage your work
          </p>

          <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl">
            Bring your projects and tasks together.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Organize projects, collaborate with your team, and keep your work
            moving forward in one place.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/register"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
            >
              Create your workspace
            </Link>

            <Link
              href="/login"
              className="rounded-lg border border-slate-700 px-6 py-3 font-medium transition hover:bg-slate-800"
            >
              Sign in
            </Link>
          </div>
        </section>

        <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} TaskFlow
        </footer>
      </div>
    </main>
  );
}
