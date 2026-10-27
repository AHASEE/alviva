-- Run once in Supabase SQL Editor. Keep the service role key server-side only.
create extension if not exists pgcrypto;
create table if not exists public.blog_posts (
 id uuid primary key default gen_random_uuid(),
 slug text not null unique check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
 title text not null, excerpt text not null default '', content text not null,
 cover_url text, category text not null default 'Nutrition',
 status text not null default 'draft' check (status in ('draft','published')),
 seo_title text, seo_description text,
 created_at timestamptz not null default now(),
 updated_at timestamptz not null default now(),
 published_at timestamptz
);
create or replace function public.blog_posts_touch() returns trigger language plpgsql as $$ begin new.updated_at=now();return new;end; $$;
drop trigger if exists blog_posts_updated on public.blog_posts;
create trigger blog_posts_updated before update on public.blog_posts for each row execute function public.blog_posts_touch();
create index if not exists blog_posts_public_idx on public.blog_posts(status,published_at desc);
alter table public.blog_posts enable row level security;
-- No anon/authenticated table policies: data accessed through restricted server endpoints.
