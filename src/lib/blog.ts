import { cookies } from "next/headers";
export type Post = { id:string;slug:string;title:string;excerpt:string;content:string;cover_url:string|null;category:string;status:"draft"|"published";seo_title:string|null;seo_description:string|null;created_at:string;updated_at:string;published_at:string|null };
const url=()=>process.env.SUPABASE_URL||process.env.NEXT_PUBLIC_SUPABASE_URL||"";
const key=()=>process.env.SUPABASE_SERVICE_ROLE_KEY||"";
export function configured(){return Boolean(url()&&key())}
async function query(path:string, options:RequestInit={}){
 if(!configured())throw new Error("Blog database is not configured");
 const r=await fetch(url()+"/rest/v1/"+path,{...options,headers:{"apikey":key(),"Authorization":"Bearer "+key(),"Content-Type":"application/json",...options.headers},cache:"no-store"});
 if(!r.ok)throw new Error("Database request failed ("+r.status+")");
 return r.status===204?null:r.json();
}
export async function publicPosts():Promise<Post[]>{if(!configured())return [];return query("blog_posts?status=eq.published&select=*&order=published_at.desc")}
export async function publicPost(slug:string):Promise<Post|null>{if(!configured())return null;const a=await query("blog_posts?slug=eq."+encodeURIComponent(slug)+"&status=eq.published&select=*&limit=1");return a[0]||null}
export async function allPosts():Promise<Post[]>{return query("blog_posts?select=*&order=updated_at.desc")}
export async function savePost(input:Partial<Post>,id?:string){const allowed=["slug","title","excerpt","content","cover_url","category","status","seo_title","seo_description","published_at"];const payload:Record<string,unknown>={};for(const k of allowed){if(Object.prototype.hasOwnProperty.call(input,k))payload[k]=(input as Record<string,unknown>)[k]}if(payload.status==="published"&&!payload.published_at)payload.published_at=new Date().toISOString();return query(id?"blog_posts?id=eq."+encodeURIComponent(id):"blog_posts",{method:id?"PATCH":"POST",headers:{"Prefer":"return=representation"},body:JSON.stringify(payload)})}
export async function deletePost(id:string){return query("blog_posts?id=eq."+encodeURIComponent(id),{method:"DELETE"})}
export async function adminUser(){
 const token=(await cookies()).get("alviva_admin")?.value;if(!token||!url()||!process.env.SUPABASE_ANON_KEY||!process.env.ALVIVA_ADMIN_EMAIL)return null;
 const r=await fetch(url()+"/auth/v1/user",{headers:{"apikey":process.env.SUPABASE_ANON_KEY,"Authorization":"Bearer "+token},cache:"no-store"});
 if(!r.ok)return null;const u=await r.json();return u.email?.toLowerCase()===process.env.ALVIVA_ADMIN_EMAIL.toLowerCase()?u:null;
}
