import { PhoneCall } from "lucide-react";

export default function CTA() {
  return (
    <div id="contact" className="rounded-3xl border bg-gradient-to-br from-brand-700 to-brand-300 text-white shadow-soft p-8 md:p-10">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-white/90">
            Contact
          </p>
          <h3 className="mt-2 text-xl md:text-2xl font-semibold">
            Get a free consultation + action plan
          </h3>
          <p className="mt-2 text-white/90 text-sm max-w-xl">
            Tell us your goal and timeline. We’ll reply with a clear plan, pricing range, and next steps.
          </p>

          <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/90">
            <span className="rounded-full bg-white/15 px-3 py-1">Response within 24h</span>
            <span className="rounded-full bg-white/15 px-3 py-1">Transparent deliverables</span>
            <span className="rounded-full bg-white/15 px-3 py-1">No pressure</span>
          </div>
        </div>

        <form className="w-full max-w-xl rounded-3xl bg-white/10 border border-white/20 p-5 backdrop-blur">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input className="rounded-2xl bg-white/90 text-slate-900 placeholder:text-slate-500 px-4 py-3 text-sm outline-none" placeholder="Full name" />
            <input className="rounded-2xl bg-white/90 text-slate-900 placeholder:text-slate-500 px-4 py-3 text-sm outline-none" placeholder="Phone / WhatsApp" />
            <input className="sm:col-span-2 rounded-2xl bg-white/90 text-slate-900 placeholder:text-slate-500 px-4 py-3 text-sm outline-none" placeholder="Email" />
            <select className="sm:col-span-2 rounded-2xl bg-white/90 text-slate-900 px-4 py-3 text-sm outline-none">
              <option>What do you need?</option>
              <option>Sell my property</option>
              <option>Buy a home</option>
              <option>Rent / find tenants</option>
              <option>Property management</option>
              <option>Investment advice</option>
            </select>
            <textarea className="sm:col-span-2 rounded-2xl bg-white/90 text-slate-900 placeholder:text-slate-500 px-4 py-3 text-sm outline-none min-h-[110px]" placeholder="Brief details (city, budget, timeline)..." />
          </div>

          <button
            type="button"
            className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-ink text-white py-3 text-sm font-semibold hover:bg-slate-900"
          >
            <PhoneCall size={16} /> Request callback
          </button>

          <p className="mt-3 text-xs text-white/80">
            Hi.
          </p>
        </form>
      </div>
    </div>
  );
}
