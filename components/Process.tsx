import type { Step } from "@/lib/data";

export default function Process({ steps }: { steps: Step[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {steps.map((st, i) => (
        <div key={st.title} className="rounded-3xl border bg-white shadow-soft p-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-600 text-white font-semibold">
              {i + 1}
            </span>
            <h3 className="text-base font-semibold text-ink">{st.title}</h3>
          </div>
          <p className="mt-3 text-sm text-slate-600">{st.desc}</p>
        </div>
      ))}
    </div>
  );
}
