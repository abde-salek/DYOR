import { cn } from "@/lib/utils";

export default function Section({
  id,
  kicker,
  title,
  subtitle,
  children,
  className,
}: {
  id?: string;
  kicker?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("py-14 md:py-20 scroll-mt-24", className)}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 md:mb-10">
          {kicker ? (
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-700">
              {kicker}
            </p>
          ) : null}
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-ink">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 text-slate-600 max-w-2xl">{subtitle}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
