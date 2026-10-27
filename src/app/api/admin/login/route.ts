import {NextResponse} from "next/server";
export async function POST(req:Request){
 const {email,password}=await req.json().catch(()=>({email:"",password:""}));
 const url=process.env.SUPABASE_URL||process.env.NEXT_PUBLIC_SUPABASE_URL, anon=process.env.SUPABASE_ANON_KEY, admin=process.env.ALVIVA_ADMIN_EMAIL;
 if(!url||!anon||!admin)return NextResponse.json({error:"Admin login is not configured"},{status:503});
 if(typeof email!=="string"||email.toLowerCase()!==admin.toLowerCase()||typeof password!=="string")return NextResponse.json({error:"Invalid credentials"},{status:401});
 const r=await fetch(url+"/auth/v1/token?grant_type=password",{method:"POST",headers:{"apikey":anon,"Content-Type":"application/json"},body:JSON.stringify({email,password}),cache:"no-store"});
 if(!r.ok)return NextResponse.json({error:"Invalid credentials"},{status:401});
 const data=await r.json();if(data.user?.email?.toLowerCase()!==admin.toLowerCase())return NextResponse.json({error:"Not authorized"},{status:403});
 const response=NextResponse.json({ok:true});
 response.cookies.set("alviva_admin",data.access_token,{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"lax",path:"/",maxAge:Math.min(data.expires_in||3600,3600)});
 return response;
}
