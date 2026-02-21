export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <p className="font-semibold text-ink">DYOR</p>
            <p className="mt-2 text-sm text-slate-600">
              Premium real estate services with clear decisions and modern execution.
            </p>
          </div>

          <div className="text-sm">
            <p className="font-semibold text-ink">Services</p>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a className="hover:text-slate-900" href="#services">Buy & Sell</a></li>
              <li><a className="hover:text-slate-900" href="#services">Rentals</a></li>
              <li><a className="hover:text-slate-900" href="#services">Management</a></li>
              <li><a className="hover:text-slate-900" href="#services">Investment</a></li>
            </ul>
          </div>

          <div className="text-sm">
            <p className="font-semibold text-ink">Company</p>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a className="hover:text-slate-900" href="#process">Process</a></li>
              <li><a className="hover:text-slate-900" href="#reviews">Reviews</a></li>
              <li><a className="hover:text-slate-900" href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="text-sm">
            <p className="font-semibold text-ink">Legal</p>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a className="hover:text-slate-900" href="#">Privacy</a></li>
              <li><a className="hover:text-slate-900" href="#">Terms</a></li>
            </ul>
          </div>
        </div>

        <p className="mt-10 text-xs text-slate-500">
          © {new Date().getFullYear()} DYOR. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
