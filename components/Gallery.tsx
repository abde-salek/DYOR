export default function Gallery({
  items,
}: {
  items: Array<{ alt: string; src: string }>;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((it) => (
        <div key={it.alt} className="rounded-3xl border bg-white shadow-soft overflow-hidden">
          <div
            className="h-44 bg-cover bg-center"
            style={{ backgroundImage: `url("${it.src}")` }}
            aria-label={it.alt}
            title={it.alt}
          />
          <div className="p-4">
            <p className="text-sm font-semibold text-ink">{it.alt}</p>
            <p className="mt-1 text-xs text-slate-600">
              High-quality visuals and clear positioning to drive better leads.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
