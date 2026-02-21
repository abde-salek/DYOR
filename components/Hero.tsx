import { ArrowRight, CheckCircle2 } from "lucide-react";
import { gallery } from "@/lib/data";

const points = [
  "Buy / Sell with strategy",
  "Rentals & tenant screening",
  "Property management",
  "Investment ROI modeling",
];

export default function Hero() {
  const heroImage = gallery[0];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-50 to-white" />
      <div className="absolute -top-28 -right-28 h-96 w-96 rounded-full bg-brand-200 blur-3xl opacity-60" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-100 blur-3xl opacity-70" />

      <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-10 md:pt-20 md:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs text-slate-700 shadow-soft">
              <span className="h-2 w-2 rounded-full bg-brand-600" />
              Real estate, simplified — premium service, clear decisions.
            </p>

            <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-ink">
              DYOR helps you{" "}
              <span className="text-brand-700">buy, sell, rent</span> and{" "}
              <span className="text-brand-700">invest</span> with confidence.
            </h1>

            <p className="mt-4 text-slate-600 max-w-xl">
              A modern, end-to-end real estate service: pricing, marketing, tours,
              tenant screening, property management, and investment analysis.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
              {points.map((p) => (
                <div key={p} className="flex items-center gap-2 rounded-2xl border bg-white px-4 py-3 shadow-soft">
                  <CheckCircle2 size={18} className="text-brand-700" />
                  <span className="text-sm font-medium text-slate-800">{p}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700 shadow-soft"
              >
                Book a free consultation <ArrowRight size={16} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-semibold hover:bg-slate-50"
              >
                See what we offer
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 text-xs text-slate-600">
              <span className="rounded-full bg-slate-100 px-3 py-1">Verified workflow</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">Fast response</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">Transparent pricing</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border bg-white shadow-soft overflow-hidden">
              <div
                className="h-64 md:h-80 bg-cover bg-center"
                style={{ backgroundImage: `url("${heroImage.src}")` }}
                aria-label={heroImage.alt}
              />
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-ink">Modern marketing</p>
                    <p className="text-xs text-slate-600">Photos, listings, and lead handling</p>
                  </div>
                  <span className="rounded-full bg-brand-50 text-brand-800 px-3 py-1 text-xs font-semibold">
                    Premium
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                  <div className="rounded-2xl bg-slate-50 p-3">
                    <p className="text-xs text-slate-600">Avg. time</p>
                    <p className="mt-1 font-semibold text-ink">7–14d</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-3">
                    <p className="text-xs text-slate-600">Leads</p>
                    <p className="mt-1 font-semibold text-ink">High intent</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-3">
                    <p className="text-xs text-slate-600">Reporting</p>
                    <p className="mt-1 font-semibold text-ink">Weekly</p>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="mt-5 w-full inline-flex items-center justify-center rounded-2xl bg-ink text-white py-3 text-sm font-semibold hover:bg-slate-900"
                >
                  Get a quote today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
