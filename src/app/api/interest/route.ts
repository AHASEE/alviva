import { createHash } from "node:crypto";

export const runtime = "nodejs";
const fail = (error: string, status: number) => Response.json({ error }, { status });

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin || origin !== new URL(request.url).origin) return fail("Request not allowed.", 403);
  if (!request.headers.get("content-type")?.includes("application/json")) return fail("Use JSON.", 415);
  if (Number(request.headers.get("content-length")) > 12000) return fail("Request too large.", 413);
  let data: Record<string, unknown>;
  try {
    // Bound the stream, including requests without Content-Length.
    const reader = request.body?.getReader();
    if (!reader) return fail("Invalid request.", 400);
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 12000) { await reader.cancel(); return fail("Request too large.", 413); }
      chunks.push(value);
    }
    const parsed = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return fail("Invalid request.", 400);
    data = parsed;
  } catch { return fail("Invalid request.", 400); }
  if (data.website) return fail("Unable to submit this request.", 400);
  const field = (key: string) => typeof data[key] === "string" ? data[key].trim() : "";
  const name = field("name"), email = field("email").toLowerCase();
  const profile = field("profile"), audience = field("audience"), type = field("type");
  if (!name || name.length > 100 || /[\r\n]/.test(name) || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || data.consent !== true || !["affiliate", "early-access"].includes(type) || audience.length > 1500 || profile.length > 500) return fail("Please check your details and consent checkbox.", 400);
  if (type === "affiliate") {
    try { if (!["https:", "http:"].includes(new URL(profile).protocol)) throw new Error(); }
    catch { return fail("Enter a valid website or social profile URL.", 400); }
  }
  const key = process.env.RESEND_API_KEY, from = process.env.INTEREST_FROM_EMAIL;
  if (!key || !from) return fail("Submissions are temporarily unavailable. Please email abdulhaseeb1.dev@gmail.com.", 503);
  const text = `Type: ${type}\nName: ${name}\nEmail: ${email}\nProfile: ${profile}\nAudience: ${audience}\nContact consent: agreed\nNotice version: 2026-10-08`;
  // Resend deduplicates identical submissions for 24 hours, including network retries.
  const idempotency = createHash("sha256").update(text).digest("hex");
  try {
    const result = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json", "Idempotency-Key": `interest-${idempotency}` },
      body: JSON.stringify({ from, to: ["abdulhaseeb1.dev@gmail.com"], reply_to: email, subject: type === "affiliate" ? "Alviva — affiliate interest" : "Alviva — early access request", text }),
      signal: AbortSignal.timeout(12000),
    });
    const receipt = await result.json();
    if (!result.ok || !receipt.id) return fail("We could not submit your request. Please try again or email abdulhaseeb1.dev@gmail.com.", 502);
    return Response.json({ success: true });
  } catch { return fail("Connection problem. Please try again or email abdulhaseeb1.dev@gmail.com.", 502); }
}
