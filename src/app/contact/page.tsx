import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about prints, licensing, or commissions.",
};

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:px-10 md:py-24">
      <p className="text-xs uppercase tracking-[0.22em] text-ink-faint">
        Contact
      </p>
      <h1 className="mt-4 max-w-xl text-2xl font-light tracking-tight text-ink sm:text-3xl md:text-4xl">
        Prints, licensing, and assignments.
      </h1>
      <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-ink-muted">
        Send a note with the project, dates, and anything else that would help.
        I read everything and reply as soon as I can.
      </p>
      <ContactForm />
    </article>
  );
}
