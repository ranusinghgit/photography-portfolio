"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="relative z-20 border-b border-bronze/25 bg-paper">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 overflow-x-hidden px-4 py-3 sm:px-6 md:px-10">
        <Link
          href="/"
          className="relative block h-12 w-36 shrink-0 overflow-hidden sm:h-14 sm:w-44 md:-left-[30px] md:h-[5.25rem] md:w-[22rem]"
          aria-label="Chasing Light Photography"
        >
          <Image
            src="/chasing-light-logo-v3.png"
            alt="Chasing Light Photography"
            fill
            priority
            sizes="(max-width: 768px) 176px, 352px"
            className="origin-center translate-y-[4px] scale-[1.55] object-contain mix-blend-multiply md:translate-y-[6px]"
          />
        </Link>
        <ul className="hidden items-center gap-5 md:flex md:gap-6">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-lexend border-b pb-1 text-[0.95rem] font-medium uppercase tracking-[0.2em] transition-colors ${
                    isActive
                      ? "border-bronze text-bronze"
                      : "border-transparent text-ink hover:text-bronze"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          type="button"
          className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <span
            className={`absolute block h-px w-5 bg-ink transition ${
              menuOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute block h-px w-5 bg-ink transition ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute block h-px w-5 bg-ink transition ${
              menuOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </nav>
      <div
        id="mobile-nav"
        hidden={!menuOpen}
        className="border-t border-bronze/20 px-4 py-4 md:hidden"
      >
        <ul className="flex flex-col gap-4">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-lexend inline-block border-b pb-1 text-sm font-medium uppercase tracking-[0.2em] ${
                    isActive
                      ? "border-bronze text-bronze"
                      : "border-transparent text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
