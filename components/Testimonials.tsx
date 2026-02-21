import { Quote } from "lucide-react";
import type { Testimonial } from "@/lib/data";

export default function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {items.map((t) => (
        <div key={t.name} className="rounded-3xl border bg-white shadow-soft p-6">
          <div className="h-11 w-11 rounded-2xl bg-slate-50 flex items-center justify-center">
            <Quote size={18} className="text-slate-600" />
          </div>
          <p className="mt-4 text-sm text-slate-700 leading-relaxed">“{t.quote}”</p>
          <div className="mt-5 border-t pt-4">
            <p className="text-sm font-semibold text-ink">{t.name}</p>
            <p className="text-xs text-slate-600">{t.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
