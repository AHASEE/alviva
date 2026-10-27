# Alviva Blog CMS setup
1. In Supabase SQL Editor, execute `supabase/blog_posts.sql`.
2. In Vercel Project Settings → Environment Variables, set `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, and `ALVIVA_ADMIN_EMAIL`. Never prefix service role secrets with NEXT_PUBLIC_.
3. Create the allowed admin email as a verified user in Supabase Authentication → Users, then set their password using Supabase's supported admin/password reset flow.
4. Deploy this branch to a preview environment, test login at `/admin/login` and create an article marked draft and then published. View `/blog`.
5. Blog content accepts simple Markdown-like paragraphs, ## headings, ### headings, and '-' lists. It is text-only (not full TipTap); HTML is not executed.
6. Access tokens expire after approx one hour; re-login when expired. Auth is verified against Supabase on each admin request. Consider Supabase MFA and edge rate limiting before public production use.
7. Connect navigation to `/blog` (added to footer and navbar). On merging to main, Vercel will deploy according to project configuration.
