import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
      <p className="text-xs uppercase tracking-[0.22em] text-ink-faint">404</p>
      <h1 className="mt-4 text-2xl font-light tracking-tight text-ink sm:text-3xl md:text-4xl">
        Page not found.
      </h1>
      <Link
        href="/"
        className="mt-10 inline-block text-xs uppercase tracking-[0.18em] text-ink hover:opacity-60"
      >
        Back to gallery
      </Link>
    </div>
  );
}
