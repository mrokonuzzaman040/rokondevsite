"use client";

import { useFormState, useFormStatus } from "react-dom";
import { motion } from "framer-motion";
import { initialContactFormState } from "@/lib/types";
import { submitContact } from "@/app/contact/actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center rounded-full border border-[color:var(--color-accent)/.4] bg-[color:var(--color-accent)/.2] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending..." : "Send message"}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContact, initialContactFormState);

  return (
    <motion.form
      action={formAction}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-16 grid gap-6 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-background)/.7] p-8"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-muted">
          <span className="uppercase tracking-[0.3em]">Name</span>
          <input
            name="name"
            type="text"
            required
            className={`rounded-2xl border bg-black/30 px-3 py-3 text-white focus:border-[color:var(--color-accent)] focus:outline-none ${
              state.errors?.name ? "border-red-400" : "border-[color:var(--color-border)]"
            }`}
            placeholder="Your name"
          />
          {state.errors?.name && <span className="text-xs text-red-300">{state.errors.name}</span>}
        </label>
        <label className="flex flex-col gap-2 text-sm text-muted">
          <span className="uppercase tracking-[0.3em]">Email</span>
          <input
            name="email"
            type="email"
            required
            className={`rounded-2xl border bg-black/30 px-3 py-3 text-white focus:border-[color:var(--color-accent)] focus:outline-none ${
              state.errors?.email ? "border-red-400" : "border-[color:var(--color-border)]"
            }`}
            placeholder="name@company.com"
          />
          {state.errors?.email && <span className="text-xs text-red-300">{state.errors.email}</span>}
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm text-muted">
        <span className="uppercase tracking-[0.3em]">Company or team</span>
        <input
          name="company"
          type="text"
          className="rounded-2xl border border-[color:var(--color-border)] bg-black/30 px-3 py-3 text-white focus:border-[color:var(--color-accent)] focus:outline-none"
          placeholder="Where should we collaborate?"
        />
      </label>

      <label className="flex flex-col gap-2 text-sm text-muted">
        <span className="uppercase tracking-[0.3em]">How can I help?</span>
        <textarea
          name="message"
          rows={6}
          required
          className={`rounded-2xl border bg-black/30 px-3 py-3 text-white focus:border-[color:var(--color-accent)] focus:outline-none ${
            state.errors?.message ? "border-red-400" : "border-[color:var(--color-border)]"
          }`}
          placeholder="Share timelines, goals, or product context."
        />
        {state.errors?.message && <span className="text-xs text-red-300">{state.errors.message}</span>}
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <SubmitButton />
        {state.status === "success" && (
          <p className="text-sm text-green-300">{state.message}</p>
        )}
        {state.status === "error" && (
          <p className="text-sm text-red-300">{state.message}</p>
        )}
      </div>
    </motion.form>
  );
}
