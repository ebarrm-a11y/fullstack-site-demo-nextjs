import { cn } from "@/lib/utils";

export default function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative min-h-[92vh] flex items-center py-20",
        "before:absolute before:inset-x-0 before:top-0 before:h-20 before:fade-top before:pointer-events-none",
        "after:absolute after:inset-x-0 after:bottom-0 after:h-20 after:fade-bottom after:pointer-events-none",
        className
      )}
    >
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}
