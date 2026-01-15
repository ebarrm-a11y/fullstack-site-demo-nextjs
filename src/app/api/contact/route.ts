import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit } from "@/lib/rateLimit";
import fs from "fs/promises";
import path from "path";

export const runtime = "nodejs";

const Body = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email().max(120),
  phone: z.string().max(40).optional().or(z.literal("")),
  service: z.string().min(2).max(60),
  date: z.string().max(30).optional().or(z.literal("")),
  message: z.string().min(10).max(2000),
  website: z.string().max(200).optional().or(z.literal("")), // honeypot
});

function getIp(req: NextRequest) {
  const xff = req.headers.get("x-forwarded-for");
  return (xff?.split(",")[0]?.trim() || "unknown").slice(0, 64);
}

export async function POST(req: NextRequest) {
  const ip = getIp(req);
  const rl = checkRateLimit(`contact:${ip}`, 6, 60_000);
  if (!rl.ok) {
    return NextResponse.json({ error: "Too many requests. Try again in a minute." }, { status: 429 });
  }

  const json = await req.json().catch(() => null);
  const parsed = Body.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  // honeypot
  if (parsed.data.website && parsed.data.website.trim().length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const lead = {
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone ?? "",
    service: parsed.data.service,
    date: parsed.data.date ?? "",
    message: parsed.data.message,
    ip,
    at: new Date().toISOString(),
    ua: req.headers.get("user-agent") ?? "",
  };

  const file = path.join(process.cwd(), "data", "leads.ndjson");
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.appendFile(file, JSON.stringify(lead) + "\n", "utf8");

  return NextResponse.json({ ok: true }, { status: 200 });
}
