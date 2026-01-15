"use client";

import { useState } from "react";

export default function AdminPage() {
  const [pass, setPass] = useState("");
  const [data, setData] = useState<any>(null);
  const [err, setErr] = useState<string | null>(null);

  async function load() {
    setErr(null);
    const res = await fetch("/api/admin/content", { headers: { "x-admin-pass": pass } });
    if (!res.ok) {
      setErr("Unauthorized or missing ADMIN_PASSWORD.");
      return;
    }
    setData(await res.json());
  }

  return (
    <main className="container mx-auto px-4 py-14">
      <h1 className="text-3xl font-semibold">Admin</h1>
      <p className="mt-2 text-white/70">Demo admin viewer (env password). For production, replace with real auth.</p>

      <div className="mt-6 glass rounded-2xl p-5 max-w-xl">
        <label className="block">
          <span className="text-xs text-white/70">ADMIN_PASSWORD</span>
          <input className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 focus-ring"
            value={pass} onChange={(e) => setPass(e.target.value)} type="password" />
        </label>
        <button className="mt-4 rounded-xl bg-white text-black font-semibold px-4 py-2" onClick={load}>
          Load content + leads
        </button>
        {err ? <div className="mt-3 text-sm text-red-300">{err}</div> : null}
      </div>

      {data ? (
        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-5 overflow-auto">
            <div className="text-white font-semibold">siteContent</div>
            <pre className="mt-3 text-xs text-white/70 whitespace-pre-wrap">{JSON.stringify(data.siteContent, null, 2)}</pre>
          </div>
          <div className="glass rounded-2xl p-5 overflow-auto">
            <div className="text-white font-semibold">Latest leads</div>
            <pre className="mt-3 text-xs text-white/70 whitespace-pre-wrap">{JSON.stringify(data.leads, null, 2)}</pre>
          </div>
        </div>
      ) : null}
    </main>
  );
}
