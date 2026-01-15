"use client";

import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-14 max-w-3xl">
      <h1 className="text-4xl font-semibold">Book a Consultation</h1>
      <p className="mt-3 text-white/70">Tell us what you need — we’ll reply with a plan and quote range.</p>
      <div className="mt-8 glass rounded-2xl p-6">
        <ContactForm lang="en" />
      </div>
    </main>
  );
}
