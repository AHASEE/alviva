# Interest form delivery

Both forms POST JSON to /api/interest without leaving the website. Valid submissions are emailed to abdulhaseeb1.dev@gmail.com through Resend. There is no separate database and no automatic applicant confirmation email; the page shows confirmation after Resend accepts the request (not a guarantee of inbox delivery).

Before accepting signups, configure these server-only variables in Vercel for Production (and Preview if testing there), then redeploy:

- RESEND_API_KEY: a Resend sending API key.
- INTEREST_FROM_EMAIL: a sender on your verified Resend domain, e.g. Alviva <forms@alviva.app>.

Never prefix these with NEXT_PUBLIC or commit secrets. Verify the sender domain in Resend first. Without configuration the endpoint returns 503 and the form offers a direct email link, never a false success.

Validation, request size limits, same-origin checks, a honeypot, a submit lock and provider idempotency are included. Configure a persistent rate limit for POST /api/interest in your hosting firewall before promoting the form; same-origin checks and honeypots alone do not stop scripted abuse.

After deployment test an early-access and affiliate request, confirm each arrives in the destination inbox and verify Reply-To. Confirm validation and provider failures keep entered data for retry. Resend's identical-request deduplication lasts 24 hours. No live email was sent during automated checks.
