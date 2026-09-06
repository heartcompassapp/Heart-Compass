export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white text-zinc-900">
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-8 px-6 py-16">
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-rose-700">
            HeartCompass
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            The 90-day guide between your diagnosis and your recheck.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600">
            HeartCompass helps people who received lipid results, a prescription,
            and no roadmap. This repository is the development home for the
            product experience.
          </p>
        </div>

        <section className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Development status</h2>
          <p className="mt-2 text-zinc-600">
            The Cloud Agent environment installs dependencies with{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm">
              npm ci
            </code>{" "}
            and starts the Next.js dev server on port 3000.
          </p>
        </section>
      </main>
    </div>
  );
}
