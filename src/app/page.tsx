export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8">
        <header className="flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight">TaskFlow</div>

          <nav className="flex items-center gap-6 text-sm text-slate-300">
            <a href="/login" className="transition hover:text-white">
              Sign in
            </a>

            <a
              href="/register"
              className="rounded-lg bg-white px-4 py-2 font-medium text-slate-950 transition hover:bg-slate-200"
            >
              Get started
            </a>
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

          <div className="mt-10 flex gap-4">
            <a
              href="/register"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
            >
              Create your workspace
            </a>

            <a
              href="/login"
              className="rounded-lg border border-slate-700 px-6 py-3 font-medium transition hover:bg-slate-800"
            >
              Sign in
            </a>
          </div>
        </section>

        <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} TaskFlow
        </footer>
      </div>
    </main>
  );
}
