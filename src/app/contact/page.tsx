import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about prints, licensing, or commissions.",
};

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-24">
      <p className="text-xs uppercase tracking-[0.22em] text-ink-faint">
        Contact
      </p>
      <h1 className="mt-4 max-w-xl text-4xl font-light tracking-tight text-ink md:text-5xl">
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
