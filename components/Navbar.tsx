import Link from "next/link";
import { Building2 } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white shadow-soft">
            <Building2 size={18} />
          </span>
          <span className="tracking-tight">DYOR</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-slate-900">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden sm:inline-flex rounded-xl px-4 py-2 text-sm font-medium border hover:bg-slate-50"
          >
            Get a quote
          </a>
          <a
            href="#contact"
            className="inline-flex rounded-xl px-4 py-2 text-sm font-semibold bg-brand-600 text-white hover:bg-brand-700 shadow-soft"
          >
            Book a call
          </a>
        </div>
      </div>
    </header>
  );
}
