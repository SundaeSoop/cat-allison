"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="max-w-xl">
        <h1 className="text-3xl font-semibold">Thanks!</h1>
        <p className="text-gray-600 mt-2">Message received. I'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="text-gray-600 mt-2">
        For commissions, originals, or questions, send a message.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        <input
          name="name"
          placeholder="Name"
          className="rounded-xl border border-gray-300 px-4 py-3 text-sm"
          required
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          className="rounded-xl border border-gray-300 px-4 py-3 text-sm"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={6}
          className="rounded-xl border border-gray-300 px-4 py-3 text-sm"
          required
        />
        <button
          disabled={status === "sending"}
          className="rounded-xl bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-gray-800 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send"}
        </button>
        {status === "error" && (
          <p className="text-sm text-red-600">Something went wrong — please try again.</p>
        )}
      </form>
    </div>
  );
}
