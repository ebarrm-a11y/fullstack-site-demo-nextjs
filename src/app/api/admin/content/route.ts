import { NextRequest, NextResponse } from "next/server";
import { siteContent } from "@/data/siteContent";
import fs from "fs/promises";
import path from "path";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const pass = req.headers.get("x-admin-pass") ?? "";
  if (!process.env.ADMIN_PASSWORD || pass !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const file = path.join(process.cwd(), "data", "leads.ndjson");
  let leads: any[] = [];
  try {
    const txt = await fs.readFile(file, "utf8");
    const lines = txt.trim().split("\n").filter(Boolean);
    leads = lines.slice(-30).map((l) => JSON.parse(l)).reverse();
  } catch {
    leads = [];
  }

  return NextResponse.json({ siteContent, leads }, { status: 200 });
}
