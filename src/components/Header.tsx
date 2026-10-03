"use client";

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

  return (
    <header className="relative z-20 border-b border-bronze/25 bg-paper">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-10 md:py-3">
        <Link
          href="/"
          className="relative -left-[30px] block h-[4.5rem] w-64 shrink-0 overflow-hidden md:h-[5.25rem] md:w-[22rem]"
          aria-label="Chasing Light Photography"
        >
          <Image
            src="/chasing-light-logo-v3.png"
            alt="Chasing Light Photography"
            fill
            priority
            sizes="352px"
            className="origin-center translate-y-[6px] scale-[1.55] object-contain mix-blend-multiply"
          />
        </Link>
        <ul className="flex items-center gap-5 md:gap-6">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-lexend border-b pb-1 text-base font-medium uppercase tracking-[0.2em] transition-colors md:text-[0.95rem] ${
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
      </nav>
    </header>
  );
}
