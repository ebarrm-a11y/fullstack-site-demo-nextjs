"use client";

import { useMemo, useState } from "react";
import SeamlessScrollPage from "@/components/SeamlessScrollPage";
import Section from "@/components/Section";
import { siteContent } from "@/data/siteContent";
import CTA from "@/components/CTA";
import PortfolioGrid from "@/components/PortfolioGrid";
import Testimonials from "@/components/Testimonials";
import PricingCards from "@/components/PricingCards";
import ContactForm from "@/components/ContactForm";
import type { Lang } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import LangToggle from "@/components/LangToggle";

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("en");
  const tr = useMemo(() => t(lang), [lang]);

  const sections = useMemo(
    () => [
      { id: "hero", bg: { id: "bg1", imageUrl: "https://picsum.photos/seed/bg1/2400/1400", overlay: "strong" as const } },
      { id: "services", bg: { id: "bg2", imageUrl: "https://picsum.photos/seed/bg2/2400/1400" } },
      { id: "portfolio", bg: { id: "bg3", imageUrl: "https://picsum.photos/seed/bg3/2400/1400" } },
      { id: "process", bg: { id: "bg4", imageUrl: "https://picsum.photos/seed/bg4/2400/1400" } },
      { id: "proof", bg: { id: "bg5", imageUrl: "https://picsum.photos/seed/bg5/2400/1400" } },
      { id: "pricing", bg: { id: "bg6", imageUrl: "https://picsum.photos/seed/bg6/2400/1400" } },
      { id: "faq", bg: { id: "bg7", imageUrl: "https://picsum.photos/seed/bg7/2400/1400" } },
      { id: "contact", bg: { id: "bg8", imageUrl: "https://picsum.photos/seed/bg8/2400/1400", overlay: "strong" as const } },
    ],
    []
  );

  return (
    <SeamlessScrollPage sections={sections}>
      {() => (
        <>
          <Section id="hero">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-6">
                <LangToggle onChange={setLang} />
                <span className="text-xs text-white/60">EN/FR ready</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
                {siteContent.siteName}
              </h1>
              <p className="mt-4 text-lg text-white/75">
                {siteContent.tagline}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/contact" className="focus-ring rounded-full px-5 py-3 bg-white text-black font-semibold">
                  {tr.cta.book}
                </a>
                <a href="/portfolio" className="focus-ring rounded-full px-5 py-3 glass hover:bg-white/12 transition">
                  {tr.cta.portfolio}
                </a>
              </div>

              <div className="mt-10 grid sm:grid-cols-3 gap-3">
                {["Mobile-first", "Fast delivery", "Brand-safe edits"].map((x) => (
                  <div key={x} className="glass rounded-2xl p-4 text-sm text-white/75">
                    <div className="text-white/90 font-medium">{x}</div>
                    <div className="mt-1 text-white/60">Built for marketing performance & trust.</div>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          <Section id="services">
            <div className="max-w-5xl">
              <h2 className="text-3xl md:text-4xl font-semibold">Services</h2>
              <p className="mt-3 text-white/70">Weddings, corporate, portraits, artists, events & product sets — consistent quality across every deliverable.</p>

              <div className="mt-8 grid md:grid-cols-3 gap-4">
                {siteContent.services.map((s) => (
                  <div key={s.id} className="glass rounded-2xl p-5">
                    <div className="text-white font-semibold">{s.title}</div>
                    <div className="mt-2 text-white/70 text-sm">{s.short}</div>
                    <div className="mt-4 text-xs text-white/60">Starting: <span className="text-white/80">{s.priceRange}</span></div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <CTA title="Need a multilingual campaign page?" subtitle="This site supports EN/FR structure and reusable section templates for fast landing page delivery." />
              </div>
            </div>
          </Section>

          <Section id="portfolio">
            <div className="max-w-6xl">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-3xl md:text-4xl font-semibold">Portfolio</h2>
                  <p className="mt-3 text-white/70">Filter by category, open in lightbox, optimized images.</p>
                </div>
                <a className="hidden sm:inline focus-ring rounded-full px-4 py-2 glass hover:bg-white/12 transition" href="/portfolio">
                  Full portfolio →
                </a>
              </div>
              <div className="mt-8">
                <PortfolioGrid items={siteContent.portfolioItems.slice(0, 12)} />
              </div>
            </div>
          </Section>

          <Section id="process">
            <div className="max-w-5xl">
              <h2 className="text-3xl md:text-4xl font-semibold">How it works</h2>
              <div className="mt-8 grid md:grid-cols-4 gap-4">
                {[
                  ["1) Brief", "We align on style, usage, and timeline."],
                  ["2) Plan", "Shot list + schedule. No surprises."],
                  ["3) Shoot", "Clean direction. Efficient on set."],
                  ["4) Deliver", "Gallery + exports with clear naming."],
                ].map(([a, b]) => (
                  <div key={a} className="glass rounded-2xl p-5">
                    <div className="text-white font-semibold">{a}</div>
                    <div className="mt-2 text-white/70 text-sm">{b}</div>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid md:grid-cols-2 gap-4">
                <div className="glass rounded-2xl p-5">
                  <div className="text-white font-semibold">Deployment-ready structure</div>
                  <div className="mt-2 text-white/70 text-sm">Sitemap, robots, OG tags, JSON-LD, rate-limited forms, and an admin viewer for content/leads.</div>
                </div>
                <div className="glass rounded-2xl p-5">
                  <div className="text-white font-semibold">Marketing-friendly UX</div>
                  <div className="mt-2 text-white/70 text-sm">Seamless scrolling with crossfade backgrounds — cinematic feel without scroll-jacking.</div>
                </div>
              </div>
            </div>
          </Section>

          <Section id="proof">
            <div className="max-w-5xl">
              <h2 className="text-3xl md:text-4xl font-semibold">Reviews</h2>
              <p className="mt-3 text-white/70">Credibility, consistency, and calm communication.</p>
              <div className="mt-8">
                <Testimonials />
              </div>
            </div>
          </Section>

          <Section id="pricing">
            <div className="max-w-5xl">
              <h2 className="text-3xl md:text-4xl font-semibold">Pricing</h2>
              <p className="mt-3 text-white/70">Transparent ranges — final quote after consultation.</p>
              <div className="mt-8">
                <PricingCards />
              </div>
            </div>
          </Section>

          <Section id="faq">
            <div className="max-w-5xl">
              <h2 className="text-3xl md:text-4xl font-semibold">FAQ</h2>
              <div className="mt-8 grid md:grid-cols-2 gap-4">
                {siteContent.faqs.map((f) => (
                  <div key={f.q} className="glass rounded-2xl p-5">
                    <div className="text-white font-semibold">{f.q}</div>
                    <div className="mt-2 text-white/70 text-sm">{f.a}</div>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          <Section id="contact">
            <div className="max-w-5xl grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold">{tr.form.title}</h2>
                <p className="mt-3 text-white/70">
                  Share the essentials — we’ll reply with a clear plan and quote range.
                </p>
                <div className="mt-6 glass rounded-2xl p-5 text-sm text-white/70">
                  <div className="text-white/90 font-medium">Service areas</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {siteContent.serviceAreas.map((x) => (
                      <span key={x} className="px-3 py-1 rounded-full bg-white/10">{x}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="glass rounded-2xl p-6">
                <ContactForm lang={lang} />
              </div>
            </div>
          </Section>
        </>
      )}
    </SeamlessScrollPage>
  );
}
