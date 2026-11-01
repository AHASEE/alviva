"use client";

import { FormEvent, useState } from "react";

export default function DeleteAccountRequestForm() {
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!confirm) {
      setStatus("error");
      setMessage("Please confirm that you want to request permanent account deletion.");
      return;
    }

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/delete-account-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          note,
          confirm,
          website,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to submit deletion request.");
      }

      setStatus("success");
      setMessage(
        "Your deletion request has been submitted. We may contact you at this email to verify account ownership. Never send us your password."
      );
      setEmail("");
      setNote("");
      setConfirm(false);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit deletion request."
      );
    }
  }

  return (
    <form onSubmit={submit} className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div>
        <label htmlFor="delete-email" className="mb-2 block font-semibold text-gray-900">
          Alviva account email
        </label>
        <input
          id="delete-email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-emerald-700"
        />
      </div>

      <div>
        <label htmlFor="delete-note" className="mb-2 block font-semibold text-gray-900">
          Optional note
        </label>
        <textarea
          id="delete-note"
          value={note}
          onChange={(event) => setNote(event.target.value)}
          maxLength={1000}
          rows={4}
          placeholder="Anything we should know about your request?"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-emerald-700"
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="delete-website">Website</label>
        <input
          id="delete-website"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-gray-700">
        <input
          type="checkbox"
          checked={confirm}
          onChange={(event) => setConfirm(event.target.checked)}
          className="mt-1 h-4 w-4"
        />
        <span>
          I am requesting permanent deletion of my Alviva account and the app data associated with it.
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-xl bg-red-600 px-5 py-3 font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Submitting..." : "Request account deletion"}
      </button>

      {message ? (
        <p
          role="status"
          className={
            status === "success"
              ? "rounded-xl bg-emerald-50 p-4 text-sm text-emerald-900"
              : "rounded-xl bg-red-50 p-4 text-sm text-red-900"
          }
        >
          {message}
        </p>
      ) : null}

      <p className="text-xs leading-5 text-gray-500">
        Do not enter your password here. Alviva support will never ask you to send your password.
      </p>
    </form>
  );
}
