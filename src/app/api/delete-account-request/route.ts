import { createHash } from "node:crypto";

export const runtime = "nodejs";

const fail = (error: string, status: number) =>
  Response.json({ error }, { status });

export async function POST(request: Request) {
  const origin = request.headers.get("origin");

  if (!origin || origin !== new URL(request.url).origin) {
    return fail("Request not allowed.", 403);
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return fail("Use JSON.", 415);
  }

  if (Number(request.headers.get("content-length")) > 8000) {
    return fail("Request too large.", 413);
  }

  let data: Record<string, unknown>;

  try {
    const body = await request.text();

    if (body.length > 8000) {
      return fail("Request too large.", 413);
    }

    const parsed = JSON.parse(body);

    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return fail("Invalid request.", 400);
    }

    data = parsed;
  } catch {
    return fail("Invalid request.", 400);
  }

  if (data.website) {
    return fail("Unable to submit this request.", 400);
  }

  const email =
    typeof data.email === "string"
      ? data.email.trim().toLowerCase()
      : "";

  const note =
    typeof data.note === "string"
      ? data.note.trim().slice(0, 1000)
      : "";

  if (
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    data.confirm !== true
  ) {
    return fail(
      "Enter the email used for your Alviva account and confirm the deletion request.",
      400
    );
  }

  const key = process.env.RESEND_API_KEY;
  const from = process.env.INTEREST_FROM_EMAIL;

  if (!key || !from) {
    return fail(
      "Deletion requests are temporarily unavailable. Please email abdulhaseeb1.dev@gmail.com.",
      503
    );
  }

  const text =
    `Alviva account deletion request\n\nAccount email: ${email}\n` +
    `Optional note: ${note || "None"}\n` +
    `Requested from: alviva.app/delete-account\n` +
    `Request date: ${new Date().toISOString()}\n\n` +
    "Important: Never request or accept the user's password. Verify account ownership before manual deletion.";

  const idempotency = createHash("sha256")
    .update(`${email}\n${note}\ndelete-account`)
    .digest("hex");

  try {
    const result = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `delete-${idempotency}`,
      },
      body: JSON.stringify({
        from,
        to: ["abdulhaseeb1.dev@gmail.com"],
        reply_to: email,
        subject: "Alviva — account deletion request",
        text,
      }),
      signal: AbortSignal.timeout(12000),
    });

    const receipt = await result.json();

    if (!result.ok || !receipt.id) {
      return fail(
        "We could not submit your request. Please try again or email abdulhaseeb1.dev@gmail.com.",
        502
      );
    }

    return Response.json({ success: true });
  } catch {
    return fail(
      "Connection problem. Please try again or email abdulhaseeb1.dev@gmail.com.",
      502
    );
  }
}
