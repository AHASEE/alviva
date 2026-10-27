import type {MetadataRoute} from "next";import {publicPosts} from "@/lib/blog";
export const dynamic="force-dynamic";
export default async function sitemap():Promise<MetadataRoute.Sitemap>{
const base="https://alviva.app";const posts=await publicPosts();
return ["/","/blog","/affiliate","/privacy","/terms"].map(p=>({url:base+p,lastModified:new Date(),changeFrequency:p==="/blog"?"weekly":"monthly" as "weekly"|"monthly",priority:p==="/"?1:p==="/blog"?.8:.5})).concat(posts.map(p=>({url:base+"/blog/"+p.slug,lastModified:new Date(p.updated_at),changeFrequency:"monthly" as const,priority:.7})));
}