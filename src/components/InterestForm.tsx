"use client";
import { useRef, useState, type FormEvent } from "react";

export default function InterestForm({ affiliate = false }: { affiliate?: boolean }) {
  const busy = useRef(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current) return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    busy.current = true;
    setStatus("sending");
    setError("");
    try {
      const response = await fetch("/api/interest", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: fields.get("name"), email: fields.get("email"), profile: fields.get("profile"), audience: fields.get("audience"), website: fields.get("_honey"), consent: fields.get("contact_consent") === "agreed", type: affiliate ? "affiliate" : "early-access" }),
        signal: AbortSignal.timeout(20000),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error(result.error || "Unable to submit. Please try again.");
      setStatus("success");
      form.reset();
    } catch (reason) {
      setError(reason instanceof Error && reason.name !== "TimeoutError" ? reason.message : "Connection problem. Please try again.");
      setStatus("error");
    } finally { busy.current = false; }
  }
  return (
    <form onSubmit={submit} aria-busy={status === "sending"} className="interest-form">
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} />
      <label>Name<input name="name" autoComplete="name" required maxLength={100} placeholder="Your name" /></label>
      <label>Email<input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" /></label>
      {affiliate && <>
        <label>Website or social profile<input name="profile" type="url" required placeholder="https://" maxLength={500} /></label>
        <label>Tell us about your audience (optional)<textarea name="audience" rows={3} maxLength={1500} placeholder="What do you create, and who follows your work?" /></label>
      </>}
      <label className="consent-label"><input name="contact_consent" type="checkbox" value="agreed" required /><span>I agree to be contacted about {affiliate ? "the Alviva affiliate program" : "Alviva early access and launch updates"} and have read the <a href="/privacy">Privacy Policy</a>{affiliate && <> and <a href="#affiliate-terms">general conditions</a></>}.</span></label>
      <button className="button lime" type="submit" disabled={status === "sending"}>{status === "sending" ? "Submitting…" : affiliate ? "Register interest ↗" : "Request early access ↗"}</button>
      {status === "success" && <p role="status">Thanks! Your request has been submitted. We will contact you at the email you provided.</p>}
      {status === "error" && <p role="alert">{error}</p>}
      <p className="form-note">Sign up right here. We’ll only contact you about your request. You can opt out anytime.</p>
      <p className="form-note">Having trouble? Email <a href="mailto:abdulhaseeb1.dev@gmail.com">abdulhaseeb1.dev@gmail.com</a>.</p>
    </form>
  );
}
