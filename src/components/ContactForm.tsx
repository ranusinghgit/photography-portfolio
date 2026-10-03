"use client";

import { FormEvent, useState } from "react";

const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const endpoint = formId ? `https://formspree.io/f/${formId}` : "";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!endpoint) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-12 max-w-lg space-y-8">
      <label className="block">
        <span className="text-xs uppercase tracking-[0.18em] text-ink-faint">
          Name
        </span>
        <input
          required
          name="name"
          type="text"
          autoComplete="name"
          className="mt-2 w-full border-0 border-b border-neutral-300 bg-transparent py-3 text-ink outline-none transition-colors focus:border-ink"
        />
      </label>
      <label className="block">
        <span className="text-xs uppercase tracking-[0.18em] text-ink-faint">
          Email
        </span>
        <input
          required
          name="email"
          type="email"
          autoComplete="email"
          className="mt-2 w-full border-0 border-b border-neutral-300 bg-transparent py-3 text-ink outline-none transition-colors focus:border-ink"
        />
      </label>
      <label className="block">
        <span className="text-xs uppercase tracking-[0.18em] text-ink-faint">
          Message
        </span>
        <textarea
          required
          name="message"
          rows={5}
          className="mt-2 w-full resize-y border-0 border-b border-neutral-300 bg-transparent py-3 text-ink outline-none transition-colors focus:border-ink"
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="border border-ink bg-ink px-8 py-3 text-xs uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-80 disabled:opacity-50"
      >
        {status === "sending" ? "Sending" : "Send"}
      </button>
      {status === "sent" && (
        <p className="text-sm text-ink-muted">Thank you. I’ll be in touch.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-ink-muted">
          {endpoint
            ? "Something went wrong. Please try again."
            : "Add NEXT_PUBLIC_FORMSPREE_ID to .env.local to enable this form."}
        </p>
      )}
    </form>
  );
}
