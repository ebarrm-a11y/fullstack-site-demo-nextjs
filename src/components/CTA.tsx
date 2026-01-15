export default function CTA({ title, subtitle, href = "/contact", cta = "Book" }: { title: string; subtitle: string; href?: string; cta?: string }) {
  return (
    <div className="glass rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <div className="text-white font-semibold">{title}</div>
        <div className="mt-1 text-white/70 text-sm">{subtitle}</div>
      </div>
      <a className="focus-ring rounded-full px-5 py-3 bg-white text-black font-semibold w-fit" href={href}>
        {cta}
      </a>
    </div>
  );
}
