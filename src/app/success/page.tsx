export default function SuccessPage() {
  return (
    <main className="container mx-auto px-4 py-20 max-w-2xl">
      <h1 className="text-4xl font-semibold">Inquiry received</h1>
      <p className="mt-3 text-white/70">Thanks — we’ll reply shortly with next steps.</p>
      <a className="mt-8 inline-flex rounded-full bg-white text-black font-semibold px-5 py-3" href="/">
        Back home
      </a>
    </main>
  );
}
