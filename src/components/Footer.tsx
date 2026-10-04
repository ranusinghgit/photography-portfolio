export default function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-10 text-sm text-ink-muted sm:px-6 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="tracking-wide">
          © {new Date().getFullYear()} Chasing Light Photography
        </p>
        <p className="text-ink-faint">Landscape · Travel</p>
      </div>
    </footer>
  );
}
