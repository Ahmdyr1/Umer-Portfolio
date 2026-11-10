"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { FiSend } from "react-icons/fi";
import { HiMail } from "react-icons/hi";
import { site } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";

async function submit(payload: Record<string, string>) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Request failed");
}

const fallback = `Something went wrong. Please email ${site.email} instead.`;

/** The homepage CTA: passes the address on to the full contact form. */
export function DiscussForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/contact?email=${encodeURIComponent(email)}`);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center gap-2 rounded-[50px] border border-gray-200 bg-white p-2 shadow-[0_8px_30px_-16px_rgba(16,24,40,0.2)] sm:p-3.5"
    >
      <span className="hidden h-[58px] w-16 shrink-0 items-center justify-center rounded-[50px] bg-[#ffe6d5] xs:flex">
        <HiMail className="size-8 text-brand" aria-hidden />
      </span>
      <label htmlFor="cta-email" className="sr-only">
        Email address
      </label>
      <input
        id="cta-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email Address"
        className="min-w-0 flex-1 bg-transparent px-3 text-body text-gray-800 outline-none placeholder:text-gray-800"
      />
      <button
        type="submit"
        className="h-12 shrink-0 rounded-[60px] bg-brand px-6 text-body text-white transition-colors hover:bg-[#f47320] sm:h-16 sm:w-[126px]"
      >
        Send
      </button>
    </form>
  );
}

export function SubscribeForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await submit({ kind: "subscribe", email });
      setStatus("sent");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex h-[51px] max-w-[304px] overflow-hidden rounded-[10px] bg-white">
        <label htmlFor="updates-email" className="sr-only">
          Email address
        </label>
        <input
          id="updates-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="min-w-0 flex-1 px-3.5 text-base text-gray-800 outline-none placeholder:text-gray-800"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          aria-label="Subscribe"
          className="flex w-[46px] shrink-0 items-center justify-center bg-brand text-white disabled:opacity-60"
        >
          <FiSend className="size-5" />
        </button>
      </div>
      <p role="status" className="mt-2 min-h-5 text-sm text-gray-300">
        {status === "sent" && "Thanks, you're on the list."}
        {status === "error" && fallback}
      </p>
    </form>
  );
}

const field =
  "w-full rounded-[20px] border border-gray-300 bg-white px-5 py-4 text-body text-gray-800 outline-none transition-colors placeholder:text-gray-400 focus:border-brand";

export function ContactForm({ initialEmail = "" }: { initialEmail?: string }) {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      await submit({ kind: "contact", ...(Object.fromEntries(new FormData(form)) as Record<string, string>) });
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 font-medium text-gray-700">
          Name
          <input name="name" required maxLength={100} autoComplete="name" className={field} placeholder="Your name" />
        </label>
        <label className="grid gap-2 font-medium text-gray-700">
          Email
          <input name="email" type="email" required defaultValue={initialEmail} autoComplete="email" className={field} placeholder="you@company.com" />
        </label>
      </div>
      <label className="grid gap-2 font-medium text-gray-700">
        Message
        <textarea name="message" required maxLength={5000} rows={6} className={`${field} resize-y`} placeholder="Tell me about your project" />
      </label>
      {/* Honeypot: hidden from people, filled in by bots. */}
      <input name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-[60px] bg-brand px-10 py-4 text-body font-bold text-white transition-colors hover:bg-[#f47320] disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
        <p role="status" className="text-body text-gray-700">
          {status === "sent" && "Thanks, your message is on its way."}
          {status === "error" && fallback}
        </p>
      </div>
    </form>
  );
}
