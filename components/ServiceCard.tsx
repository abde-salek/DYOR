import type { Service } from "@/lib/data";
import { Check } from "lucide-react";

export default function ServiceCard({ s }: { s: Service }) {
  return (
    <div className="rounded-3xl border bg-white shadow-soft p-6">
      <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {s.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-50 text-brand-800">
              <Check size={14} />
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
