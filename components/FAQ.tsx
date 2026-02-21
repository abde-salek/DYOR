import { ChevronDown } from "lucide-react";

export default function FAQ({
  items,
}: {
  items: Array<{ q: string; a: string }>;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((it) => (
        <details key={it.q} className="group rounded-3xl border bg-white shadow-soft p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
            <span className="text-sm font-semibold text-ink">{it.q}</span>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-50 text-slate-700 group-open:rotate-180 transition-transform">
              <ChevronDown size={18} />
            </span>
          </summary>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">{it.a}</p>
        </details>
      ))}
    </div>
  );
}
